import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle,
  CheckCircle2,
  Star,
  Quote,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import {
  courses,
  testimonials,
  ACADEMY_CONFIG,
} from '../data/academyData';

interface HomePageProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnroll }) => {
  // 5 Student & Parent Reviews for the purely automatic slider
  const sliderTestimonials = testimonials.slice(0, 5);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Purely Automatic Slider (Rotates smoothly every 4.5 seconds in an endless loop)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % sliderTestimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [sliderTestimonials.length]);

  const [currentSlide, setCurrentSlide] = useState(1);

  // 3 Distinct Slides with 2 different children per slide matching reference design exactly
  const heroSlides = [
    {
      id: 1,
      leftImage: '/assets/images/boy_quran_student_1792430316665.jpg',
      leftAlt: 'Young boy student reciting Holy Quran on wooden rehal',
      rightImage: '/assets/images/girl_black_hijab_quran_1792432274793.jpg',
      rightAlt: 'Young girl in black hijab studying Holy Quran',
    },
    {
      id: 2,
      leftImage: '/assets/images/boy_holding_quran_1792430342987.jpg',
      leftAlt: 'Young boy student holding Holy Quran with devotion',
      rightImage: '/assets/images/girl_teal_hijab_1792430343468.jpg',
      rightAlt: 'Young female student in teal hijab reciting Quran on rehal',
    },
    {
      id: 3,
      leftImage: '/assets/images/girl_white_hijab_1792430342115.jpg',
      leftAlt: 'Young student in white hijab reciting Holy Quran',
      rightImage: '/assets/images/girl_online_laptop_1792430342816.jpg',
      rightAlt: 'Young student attending online Quran class on laptop',
    },
  ];

  // Automatic Slider Interval (every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Statistics
  const stats = [
    { label: 'Students', value: '1000+' },
    { label: 'Teachers', value: '150+' },
    { label: 'Courses', value: '10+' },
    { label: 'Countries', value: '24+' },
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Contact Academy',
      desc: 'Fill out our short enrollment form or send a WhatsApp message to +92 318 7779954 with your learning goals.',
    },
    {
      num: '02',
      title: 'Select Course',
      desc: 'Choose from Noorani Qaida, Tajweed, Nazra, Hifz, Translation, Basic Arabic, Quranic Arabic, or Islamic Studies based on your current level.',
    },
    {
      num: '03',
      title: 'Schedule Your Class',
      desc: 'Pick your preferred days and convenient class times according to your family’s local timezone.',
    },
    {
      num: '04',
      title: 'Meet Your Teacher',
      desc: 'Begin with your 3-Day Free Trial class via Zoom/Google Meet. Experience our methodology first-hand with no obligations.',
    },
    {
      num: '05',
      title: 'Start Learning',
      desc: 'Enjoy engaging 1-on-1 sessions with custom digital workbooks, interactive Quran boards, and personal feedback.',
    },
    {
      num: '06',
      title: 'Track Your Progress',
      desc: 'Receive regular evaluations, voice notes, and formal milestone certificates as you advance towards Quran mastery.',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Home Page – Hero Section */}
      <section className="relative w-full bg-transparent overflow-hidden">
        
        {/* Desktop Golden Curved Background on Left */}
        <div className="absolute top-0 left-0 bottom-0 w-[52%] xl:w-[49%] 2xl:w-[46%] max-w-[950px] pointer-events-none hidden lg:block z-0 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 850 720"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="heroGoldSoftGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="24" result="blur" />
              </filter>
            </defs>

            {/* Soft Ambient Golden Halo Outer Edge */}
            <path
              d="M 0,0 L 460,0 C 660,40 780,210 770,360 C 760,520 640,650 390,720 L 0,720 Z"
              fill="#FDCE0D"
              fillOpacity="0.45"
              filter="url(#heroGoldSoftGlow)"
            />

            {/* Primary Solid Vibrant Golden Shape */}
            <path
              d="M 0,0 L 430,0 C 630,40 750,210 740,360 C 730,520 610,650 360,720 L 0,720 Z"
              fill="#FDCE0D"
            />
          </svg>
        </div>

        {/* Mobile Bismillah between Header and Slider */}
        <div className="block lg:hidden w-full text-center pt-4 pb-2 px-4 select-none z-20 relative">
          <div className="font-arabic text-2xl sm:text-3xl text-[#0A3826] font-bold tracking-wider leading-relaxed">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        </div>

        {/* Hero Content Container matching Navbar max-width for perfect alignment */}
        <div className="relative max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-8 lg:py-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Side: Golden Panel with Automatic 3-Slide Quran Learning Carousel */}
            <div className="lg:col-span-5 relative flex flex-col justify-center items-center lg:items-start z-10 py-3 sm:py-5 lg:py-6 pl-0">
              {/* Mobile/Tablet Golden Card Wrapper */}
              <div className="w-full lg:contents">
                <div className="rounded-[2.5rem] lg:rounded-none bg-[#FDCE0D] lg:bg-transparent p-5 sm:p-7 lg:p-0 text-white relative overflow-hidden shadow-lg lg:shadow-none">
                  
                  {/* Overlapping Rounded Student Quran Reading Cards with Automatic Slider */}
                  <div className="relative z-20 flex flex-col items-center lg:items-start w-full">
                    <div className="relative w-full flex items-center justify-center lg:justify-start">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className="relative flex items-center justify-center lg:justify-start"
                        >
                          {/* Background Student Card (Left) - Perfectly sized to never stick out of yellow shape */}
                          <div className="relative rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] overflow-hidden border-[4px] lg:border-[5px] border-white shadow-xl w-[155px] sm:w-[175px] md:w-[185px] lg:w-[195px] xl:w-[205px] h-[225px] sm:h-[250px] md:h-[270px] lg:h-[285px] xl:h-[300px] bg-slate-800 shrink-0 z-10 translate-y-3">
                            <img
                              src={heroSlides[currentSlide].leftImage}
                              alt={heroSlides[currentSlide].leftAlt}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Foreground Student Card (Right) - Perfectly sized to stay inside yellow shape */}
                          <div className="relative rounded-[26px] sm:rounded-[30px] lg:rounded-[34px] overflow-hidden border-[5px] lg:border-[6px] border-white shadow-2xl w-[195px] sm:w-[225px] md:w-[240px] lg:w-[255px] xl:w-[270px] h-[280px] sm:h-[320px] md:h-[340px] lg:h-[365px] xl:h-[385px] bg-slate-900 shrink-0 z-20 -ml-14 sm:-ml-16 md:-ml-18 lg:-ml-20 xl:-ml-22 -translate-y-3">
                            <img
                              src={heroSlides[currentSlide].rightImage}
                              alt={heroSlides[currentSlide].rightAlt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Automatic Slide Indicators (3 Dots) - Positioned directly under the left card */}
                    <div className="w-[155px] sm:w-[175px] md:w-[185px] lg:w-[195px] xl:w-[205px] flex items-center justify-center gap-2 mt-4 z-30">
                      {heroSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentSlide === idx
                              ? 'w-6 h-2 bg-[#073A1F] shadow-xs'
                              : 'w-2 h-2 bg-slate-400 hover:bg-slate-600'
                          }`}
                          aria-label={`Switch to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Background with Bismillah, Title & CTA */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-5 lg:pl-6 xl:pl-10 relative z-20">
              
              {/* Desktop Bismillah centered above Online Quran Academy */}
              <div className="hidden lg:flex w-full justify-center select-none">
                <div className="font-arabic text-3xl md:text-4xl text-[#032918] font-bold tracking-wider leading-relaxed text-center">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
              </div>

              {/* Main Heading: Online Quran Academy exactly matching screenshot */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-serif font-extrabold leading-[1.15] tracking-tight text-center lg:text-left whitespace-nowrap">
                <span className="text-[#072C1E]">Online </span>
                <span className="text-[#FCB205]">Quran Academy</span>
              </h1>

              {/* Premier International Islamic Online Academy Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#032918] text-[#FCB205] text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 text-[#FCB205] shrink-0" />
                <span>Premier International Islamic Online Academy</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onOpenEnroll()}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer whitespace-nowrap border border-emerald-900/40 lq-btn lq-shimmer-btn"
                >
                  <span>BOOK 3-DAY FREE TRIAL</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>

                <a
                  href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    'As-salamu alaykum! I would like to inquire about online Quran classes and book a 3-Day Free Trial.'
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer lq-btn"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
                </a>
              </div>

              {/* Key Features Section - 4 points in exact order matching reference design */}
              <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2 whitespace-nowrap hover:translate-x-1.5 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cost-Effective</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap hover:translate-x-1.5 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flexible 24/7 Hours</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap hover:translate-x-1.5 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-on-1 Personalized Scholars</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap hover:translate-x-1.5 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Male and Female Scholars</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academy Statistics */}
      <AnimatedSection variant="fadeUp" className="relative py-12 bg-transparent border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <AnimatedItem
                key={stat.label}
                delay={idx * 0.08}
                className="text-center p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs lq-card-hover cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#0A3826] tracking-tight hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Why Families Choose Us */}
      <AnimatedSection variant="fadeUp" className="relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-[#0A3826] text-xs sm:text-sm font-bold">
            <Award className="w-4 h-4 text-[#FCB205]" />
            <span>Islamic Academic Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Why Families Choose Us
          </h2>

          <div className="p-6 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md text-center space-y-5 lq-card-hover">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A3826]">
              Qualified & Experienced Teachers
            </h3>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Our teachers have qualifications and Islamic studies backgrounds from recognized institutions, including Al-Azhar and the Islamic University of Madinah.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap hover:bg-emerald-100/80 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Ijazah Certified Scholars
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap hover:bg-emerald-100/80 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Male & Female Tutors
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap hover:bg-emerald-100/80 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                1-on-1 Dedicated Lessons
              </span>
            </div>

            {/* Two Buttons: Enroll Now & WhatsApp on single line */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenEnroll()}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer whitespace-nowrap border border-emerald-900/40 lq-btn lq-shimmer-btn"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <a
                href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  'As-salamu alaykum! I would like to inquire about enrolling in Quran Education.'
                )}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap lq-btn"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Courses Section - Smooth scroll entrance & card transitions matching learnquraan.co.uk */}
      <AnimatedSection variant="fadeUp" className="relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 text-left">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#FCB205] uppercase tracking-widest font-serif">
                Comprehensive Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E] mt-1">
                Our Quran & Islamic Studies Courses
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                Structured programs including Tajweed, Memorization, Translation, and Islamic Studies taught 1-on-1 by certified scholars.
              </p>
            </div>

            <a
              href="#/courses"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#0A3826] hover:text-[#072C1E] cursor-pointer transition-colors"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {courses.map((course, idx) => (
              <AnimatedItem
                key={course.id}
                delay={(idx % 3) * 0.08}
                className="bg-white/92 backdrop-blur-sm rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs lq-card-hover flex flex-col justify-between group"
                data-course={course.id}
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-[#0A3826] group-hover:bg-emerald-200/80 transition-colors">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {course.level}
                    </span>
                  </div>

                  <div className="font-arabic text-xl text-[#0A3826] mb-1 font-semibold group-hover:scale-102 transition-transform duration-300 origin-left">
                    {course.arabicTitle}
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#072C1E] mb-2 group-hover:text-emerald-950 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                  <a
                    href={`#/course/${course.slug || course.id}`}
                    className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 text-center cursor-pointer shadow-xs lq-btn"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => onOpenEnroll(course.id)}
                    className="flex-1 py-2.5 px-3 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white text-xs sm:text-sm font-bold rounded-xl text-center cursor-pointer shadow-md border border-emerald-900/40 lq-btn lq-shimmer-btn"
                  >
                    Enroll Now
                  </button>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Bottom Button: Our Packages */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="#/packages"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider shadow-md cursor-pointer whitespace-nowrap lq-btn lq-shimmer-btn"
            >
              <span>Our Packages</span>
              <ArrowRight className="w-4 h-4 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. How Your Journey Begins in 6 Simple Steps - Desktop */}
      <AnimatedSection variant="fadeUp" className="hidden md:block relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-[#FCB205]" />
              <span>Simple & Transparent Admissions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
              How Your Journey Begins in 6 Simple Steps
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Getting started takes less than 2 minutes. We match you with the ideal certified scholar and schedule your first trial class at your convenience.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {journeySteps.map((step, idx) => (
              <AnimatedItem
                key={step.num}
                delay={idx * 0.07}
                className="relative p-6 sm:p-7 rounded-3xl bg-white/92 backdrop-blur-sm border border-slate-200/90 shadow-xs lq-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FCB205] group-hover:text-[#0A3826] transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-emerald-100/70 text-[#0A3826] flex items-center justify-center font-bold text-xs shadow-2xs group-hover:scale-110 group-hover:bg-[#0A3826] group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#072C1E] mb-2 group-hover:text-emerald-950 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Action buttons below the 6 steps */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md cursor-pointer whitespace-nowrap lq-btn lq-shimmer-btn"
            >
              <span>Contact Academy</span>
              <ArrowRight className="w-4 h-4 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'As-salamu alaykum! I would like to begin my Quran learning journey and schedule my 3-Day Free Trial.'
              )}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md cursor-pointer whitespace-nowrap lq-btn"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
            </a>

            <button
              onClick={() => onOpenEnroll()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#FCB205] to-[#E5BE1D] hover:from-[#FCE253] hover:to-[#FCB205] text-slate-950 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md cursor-pointer whitespace-nowrap lq-btn lq-shimmer-btn"
            >
              <span>Book 3-Day Free Trial</span>
              <Sparkles className="w-4 h-4 text-[#072C1E]" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* 7. Student Reviews / Testimonials Section with Automatic & Manually Controlled Slider */}
      <AnimatedSection variant="fadeUp" className="relative py-12 sm:py-16 bg-transparent">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="space-y-2.5 mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#FCB205] uppercase tracking-widest font-serif">
              Trusted by 200+ Muslim Families
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              What Our Students & Parents Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Real feedback from families studying 1-on-1 with our certified Islamic scholars.
            </p>
          </div>

          {/* Purely Automatic Slider Container */}
          <div className="relative bg-white/94 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200/90 shadow-md max-w-3xl mx-auto lq-card-hover select-none overflow-hidden">
            {/* Top Bar within Card: Verified Badge & Counter */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                Verified Student & Parent Feedback
              </span>

              <span className="text-xs font-bold text-slate-400 font-mono">
                {activeTestimonialIdx + 1} / {sliderTestimonials.length}
              </span>
            </div>

            {/* Purely Automatic Slider Content */}
            <div className="overflow-hidden min-h-[220px] sm:min-h-[190px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonialIdx}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col items-center"
                >
                  <Quote className="w-9 h-9 text-[#FCB205]/40 mx-auto mb-3" />

                  <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-serif italic mb-5 px-2 sm:px-6">
                    "{sliderTestimonials[activeTestimonialIdx]?.quote}"
                  </p>

                  <div className="flex items-center justify-center gap-1 text-[#FCB205] mb-2.5">
                    {[...Array(sliderTestimonials[activeTestimonialIdx]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FCB205]" />
                    ))}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#072C1E]">
                    {sliderTestimonials[activeTestimonialIdx]?.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {sliderTestimonials[activeTestimonialIdx]?.role} ·{' '}
                    {sliderTestimonials[activeTestimonialIdx]?.location}
                  </p>

                  {sliderTestimonials[activeTestimonialIdx]?.course && (
                    <span className="inline-block mt-2.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#0A3826]">
                      Course: {sliderTestimonials[activeTestimonialIdx]?.course}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Automatic Indicator Dots for the 5 items */}
            <div className="flex items-center justify-center gap-2 mt-7 pt-4 border-t border-slate-100">
              {sliderTestimonials.map((item, idx) => (
                <div
                  key={item.id}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeTestimonialIdx === idx
                      ? 'w-8 bg-[#0A3826]'
                      : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
