import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-3xl md:text-4xl font-bold">
                  ALL HEALTH. NO EXCUSES.
                </h1>
                <p className="text-muted-foreground text-lg mt-1">
                  You want to stay healthy. We are here to help.
                </p>
                <h1 className="text-2xl md:text-3xl font-serif mt-2 mb-2">
                  " Today, you need Healthcare <br />
                  which is <br />
                  <del>Reactive</del> Proactive. "
                </h1>
                <Link href="/alldocs">
                  <Button>Book Appointment</Button>
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://media.licdn.com/dms/image/C4D12AQE7kui_nw68Fw/article-cover_image-shrink_600_2000/0/1632171620746?e=2147483647&v=beta&t=8Ggp8VMfaRFOPewXs8Z-AEKWfg8knPXojJnK7KnNneg"
                  width={200}
                  height={100}
                  className="w-full h-full object-contain"
                  style={{ aspectRatio: "200/100", objectFit: "fill" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-background rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <SkullIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Oily Skin</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover the best makeup and skincare products to control
                  shine and keep your complexion looking fresh and radiant.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1"
                  prefetch={false}
                >
                  Shop Oily Skin
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <SkullIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Dry Skin</h3>
                </div>
                <p className="text-muted-foreground">
                  Nourish and hydrate your skin with our curated selection of
                  moisturizing makeup and skincare products.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1"
                  prefetch={false}
                >
                  Shop Dry Skin
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full p-2">
                    <SkullIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Combination Skin</h3>
                </div>
                <p className="text-muted-foreground">
                  Balance your complexion with our tailored selection of makeup
                  and skincare products for combination skin types.
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium mt-4 inline-flex items-center gap-1"
                  prefetch={false}
                >
                  Shop Combination Skin
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Trendy Looks"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Trending Makeup Looks
                </h2>
                <p className="text-muted-foreground text-lg">
                  Explore our curated selection of the hottest makeup trends,
                  from bold and dramatic to soft and romantic.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <PaintbrushIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Glowy Skin</h3>
                    <p className="text-muted-foreground text-sm">
                      Achieve a radiant, dewy complexion with our illuminating
                      makeup products.
                    </p>
                  </Link>
                  <Link
                    href="#"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <PaintbrushIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Smoky Eyes</h3>
                    <p className="text-muted-foreground text-sm">
                      Create a sultry, dramatic eye look with our high-pigment
                      eyeshadows.
                    </p>
                  </Link>
                  <Link
                    href="#"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <PaintbrushIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Bold Lips</h3>
                    <p className="text-muted-foreground text-sm">
                      Make a statement with our long-lasting, high-impact
                      lipstick collection.
                    </p>
                  </Link>
                  <Link
                    href="#"
                    className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-start gap-2 hover:bg-muted transition-colors"
                    prefetch={false}
                  >
                    <div className="bg-primary rounded-full p-2">
                      <PaintbrushIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Natural Glow</h3>
                    <p className="text-muted-foreground text-sm">
                      Enhance your natural beauty with our lightweight,
                      buildable makeup products.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Company</h4>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Products</h4>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Makeup
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Skincare
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Accessories
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                Tutorials
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <InstagramIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <FacebookIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            &copy; 2024 Beauty Trends. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PaintbrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function SkullIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}