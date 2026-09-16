import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') // 'terms' or 'privacy'

  const targetUrl =
    type === 'privacy'
      ? 'https://www.indianpriestservices.com/privacy-policy'
      : 'https://www.indianpriestservices.com/terms-conditions'

  try {
    const res = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch from source: status ${res.status}`)
    }

    const html = await res.text()

    // Extract .cms-content inner HTML
    const match =
      html.match(/class="cms-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i) ||
      html.match(/class="cms-content"[^>]*>([\s\S]*?)<\/div>/i) ||
      html.match(/<div[^>]*class="[^"]*cms-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i)

    let content = match ? match[1].trim() : ''

    return NextResponse.json({
      success: true,
      data: content,
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}
