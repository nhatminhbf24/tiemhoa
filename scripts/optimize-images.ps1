Add-Type -AssemblyName System.Drawing

$sourceDirectory = Join-Path $PSScriptRoot '..\assets\images\concepts'
$imageNames = @(
  'hero-concept-v1',
  'hands-concept-v2',
  'everyday-flowers-v1',
  'gift-bouquet-v1',
  'wedding-event-v1',
  'condolence-v1',
  'devotional-flowers-v1',
  'zalo-cta-v1'
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$qualityEncoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($qualityEncoder, 84L)

foreach ($imageName in $imageNames) {
  $sourcePath = Join-Path $sourceDirectory "$imageName.png"
  $outputPath = Join-Path $sourceDirectory "$imageName-web.jpg"
  $sourceImage = [System.Drawing.Image]::FromFile($sourcePath)

  try {
    $targetWidth = [Math]::Min(1600, $sourceImage.Width)
    $targetHeight = [int][Math]::Round($sourceImage.Height * ($targetWidth / $sourceImage.Width))
    $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

    try {
      $graphics.Clear([System.Drawing.Color]::White)
      $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $graphics.DrawImage($sourceImage, 0, 0, $targetWidth, $targetHeight)
      $bitmap.Save($outputPath, $jpegCodec, $encoderParameters)
    }
    finally {
      $graphics.Dispose()
      $bitmap.Dispose()
    }
  }
  finally {
    $sourceImage.Dispose()
  }
}

$encoderParameters.Dispose()
