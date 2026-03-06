[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$raizProjeto = "D:\OneDrive\TJBA\WebPageOclei\escrevendocomarte.github.io"
$arquivoMarkdown = Join-Path $raizProjeto "codigo_projeto.md"
$arquivoPdf = Join-Path $raizProjeto "documentacao_webpageoclei.pdf"
$wkhtmltopdf = "C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe"

$extensoes = @("*.html", "*.css", "*.js", "*.json")

$quebra = [Environment]::NewLine
$cerca = [string]([char]96) * 3

$conteudo = New-Object System.Collections.Generic.List[string]

$conteudo.Add("# Projeto WebPageOclei")
$conteudo.Add("")
$conteudo.Add("Documentação técnica gerada automaticamente.")
$conteudo.Add("")
$conteudo.Add("Data de geração: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')")
$conteudo.Add("")
$conteudo.Add("---")
$conteudo.Add("")

$arquivos = Get-ChildItem -Path $raizProjeto -Recurse -File -Include $extensoes |
    Where-Object {
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\documentacao\\" -and
        $_.FullName -notmatch "\\.git\\"
    } |
    Sort-Object FullName

foreach ($arquivo in $arquivos) {
    $caminhoRelativo = $arquivo.FullName.Replace($raizProjeto, "").TrimStart("\")
    $extensao = $arquivo.Extension.ToLower()

    switch ($extensao) {
        ".html" { $linguagem = "html" }
        ".css"  { $linguagem = "css" }
        ".js"   { $linguagem = "javascript" }
        ".json" { $linguagem = "json" }
        default { $linguagem = "" }
    }

    $textoArquivo = Get-Content -Path $arquivo.FullName -Raw -Encoding UTF8

    $conteudo.Add("## $caminhoRelativo")
    $conteudo.Add("")
    $conteudo.Add($cerca + $linguagem)
    $conteudo.Add($textoArquivo)
    $conteudo.Add($cerca)
    $conteudo.Add("")
    $conteudo.Add("---")
    $conteudo.Add("")
}

[System.IO.File]::WriteAllText(
    $arquivoMarkdown,
    ($conteudo -join $quebra),
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "Arquivo Markdown gerado em: $arquivoMarkdown"

pandoc $arquivoMarkdown -o $arquivoPdf --pdf-engine="$wkhtmltopdf"

Write-Host "PDF gerado em: $arquivoPdf"