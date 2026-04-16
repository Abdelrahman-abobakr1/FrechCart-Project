import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  breadcrumbs: BreadcrumbItem[];
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bgClass?: string;
}

export default function PageBanner({ breadcrumbs, icon: Icon, title, subtitle, bgClass }: PageBannerProps) {
  const finalBgClass = bgClass || "bg-gradient-to-r from-[#0aad0a] to-[#2dc653]";

  return (
    <div className={`${finalBgClass} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-[1100px]">


        <div className="flex items-center gap-2 text-[12px] text-white/70 mb-5 font-medium">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>


        <div className="flex items-center gap-4">
          <div className="w-[52px] h-[52px] bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-[26px] font-bold text-white tracking-tight">{title}</h1>
            <p className="text-[13px] text-white/70 mt-0.5 font-medium">{subtitle}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
