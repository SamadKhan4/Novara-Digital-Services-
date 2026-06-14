import ContactConsultation from './ContactConsultation'
import ContactCTA from './ContactCTA'
import ContactHero from './ContactHero'
import ContactMethods from './ContactMethods'
import ContactProjectBrief from './ContactProjectBrief'

function ContactPageContent() {
  return (
    <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-5 pb-12 pt-32 sm:gap-12 lg:gap-14 lg:px-8">
      <ContactHero />
      <ContactMethods />
      <ContactProjectBrief />
      <ContactConsultation />
      <ContactCTA />
    </div>
  )
}

export default ContactPageContent
