import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#34421D" }}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/monky-logo.png"
                alt=""
                width={120}
                height={40}
                unoptimized
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/80">
              Especialistas en ayudar a tiendas online a escalar sus ventas de forma sostenible.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="mailto:agencymonky@gmail.com" className="hover:text-[#DE6E27] transition-colors">
                  Gmail: agencymonky@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© 2025 Monky Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
