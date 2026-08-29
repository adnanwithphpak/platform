param(
  [string]$ChromePath = 'C:\Program Files\Google\Chrome\Application\chrome.exe',
  [int]$Port = 8123
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$phpPath = 'C:\xampp\php\php.exe'
$outputPath = Join-Path $projectRoot '.prerender-output.html'
$errorPath = Join-Path $projectRoot '.prerender-error.log'

if (-not (Test-Path -LiteralPath $ChromePath)) { throw "Chrome not found at $ChromePath" }
if (-not (Test-Path -LiteralPath $phpPath)) { throw "PHP not found at $phpPath" }

$server = Start-Process -FilePath $phpPath -ArgumentList '-S',"127.0.0.1:$Port",'-t',$projectRoot -WindowStyle Hidden -PassThru
try {
  Start-Sleep -Seconds 2
  [xml]$sitemap = Get-Content -LiteralPath (Join-Path $projectRoot 'sitemap.xml') -Raw
  $count = 0
  foreach ($urlNode in $sitemap.urlset.url) {
    $uri = [uri]$urlNode.loc
    $route = $uri.AbsolutePath
    $localUrl = "http://127.0.0.1:$Port$route"
    $target = if ($route -eq '/') {
      Join-Path $projectRoot 'index.html'
    } else {
      Join-Path (Join-Path $projectRoot $route.Trim('/')) 'index.html'
    }

    $chrome = Start-Process -FilePath $ChromePath -ArgumentList '--headless','--disable-gpu','--no-sandbox','--no-first-run','--disable-extensions','--virtual-time-budget=3500','--dump-dom',$localUrl -Wait -PassThru -RedirectStandardOutput $outputPath -RedirectStandardError $errorPath
    if ($chrome.ExitCode -ne 0) { throw "Chrome failed for $route with exit code $($chrome.ExitCode)" }
    $domText = [IO.File]::ReadAllText($outputPath, [Text.Encoding]::UTF8)
    if (-not $domText -or $domText -notmatch '<h1' -or $domText -match '<div id="root"></div>') { throw "Rendered content missing for $route" }
    [IO.File]::WriteAllText($target, $domText, [Text.UTF8Encoding]::new($false))
    $count++
    Write-Output "Prerendered $count/$($sitemap.urlset.url.Count): $route"
  }
  Write-Output "Full DOM prerender complete: $count routes."
}
finally {
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
  Remove-Item -LiteralPath $outputPath,$errorPath -Force -ErrorAction SilentlyContinue
}
