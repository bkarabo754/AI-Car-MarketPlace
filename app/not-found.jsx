import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { House } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] text-center">
      <div className="max-w-xl w-full space-y-8">
        <h1 className="text-[96px] font-extrabold tracking-tight text-gray-900 leading-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or may have been
          moved.
        </p>
        <div className="flex justify-center">
          <Link href="/" passHref>
            <Button className="mt-4 px-6 py-3 text-base font-medium gap-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer">
              <House className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
