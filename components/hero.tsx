import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
      <div className="relative h-[500px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/head.avif')",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">قطر الأكثر أماناً عالمياً</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            واصلت قطر تصدرها لدول العالم في معدلات الأمان، وذلك للمرة الخامسة على التوالي، متفوقة على 142 بلداً يشملها مؤشر نامبيو للأمان.
          </p>
          <Link href="/submit">
          <Button className="w-full mt-16">تقديم طلب تجديد البطاقة الصحية </Button>
          </Link>
        </div>
      </div>
    )
  }
  