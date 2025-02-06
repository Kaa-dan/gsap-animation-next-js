import Image from "next/image"

export default function Banner() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with icon and creative expertise */}
        <div className="flex items-center gap-2 mb-16">
           <div></div>
          
          <span className="text-sm font-medium tracking-wider">CREATIVE EXPERTISE</span>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">A TOP-TIER DESIGN AGENCY</h1>
            <p className="text-gray-600 text-lg max-w-md">
              We help brands to grow and better connect with their prospective clients by telling their stories clearly
              with effective branding.
            </p>

            {/* Circular badge */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-2 border-black flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right column with purple box and avatars */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center">
              <span className="text-white text-xl">Brand Logo</span>

              {/* Avatars */}
              <div className="absolute -top-4 -right-4">
                <div className="relative bg-white rounded-full p-1 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="absolute -right-20 -top-1 bg-black text-white text-sm py-1 px-3 rounded-full">
                    Mark Laurance
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -left-4">
                <div className="bg-white rounded-full p-1 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0">
                <div className="bg-white rounded-full p-1 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

