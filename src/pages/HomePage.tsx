import { Seo } from '@/components/seo/Seo'
import { MainLayout } from '@/components/layout/MainLayout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Purpose } from '@/components/sections/Purpose'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { Comparison } from '@/components/sections/Comparison'
import { Industries } from '@/components/sections/Industries'
import { Contact } from '@/components/sections/Contact'

export function HomePage() {
  return (
    <MainLayout>
      <Seo />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Services />
        <WhyUs />
        <Comparison />
        <Industries />
        <Contact />
      </main>
    </MainLayout>
  )
}
