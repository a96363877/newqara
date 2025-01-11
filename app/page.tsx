
"use client"

import NewsFeed from '@/components/ber';
import { StatisticsSection } from '@/components/ statistics-section';
import ServicesPage from '@/components/vertical-carousel';
import AboutQatar from '@/components/about-qatar';
import { Hero } from '@/components/hero';
import { Bookmark } from '@/components/bookmark';
import { SupportSection } from '@/components/support';
import Link from 'next/link';
import { LiveChatWidget } from '@livechat/widget-react'

export default function HomePage() {

  return (

    <div dir="rtl" className="min-h-screen bg-gray-50">
       <LiveChatWidget
      license="18979514"
    />   
      <Hero />
      {/* Main Content */}
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 -mt-10 relative">
        <div className="bg-white rounded-lg shadow-lg py-6">
          {/* Services Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">الخدمات</h2>
            <div className="space-y-3">
              {[
                'طلب خدمة البطاقة السنوية',
                'الاستعلام عن حالة البطاقة السنوية',
                'الاستعلام عن حالة البطاقة السنوية',
                'طلب خدمة تجديد بطاقة الموظف',
                'طلب بطاقة موظف'
              ].map((service, index) => (
                <Link key={index} href={'/submit'} className='p-3 mt-1 '>
                  <div
                    className="flex justify-between items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="text-gray-700">{service}</span>
                    <span className="text-gray-700">{<Bookmark />}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* */}
          <StatisticsSection />
          <NewsFeed />
          <ServicesPage />
          <AboutQatar />
          <SupportSection />
       
        </div>
      </div>
     
    </div>
  );
}
