import ContactConsultation from './ContactConsultation'
import ContactCTA from './ContactCTA'
import ContactHero from './ContactHero'
import ContactMethods from './ContactMethods'
import ContactProjectBrief from './ContactProjectBrief'

function ContactPageContent() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
      <ContactHero />
      <ContactMethods />
      <ContactProjectBrief />
      <ContactConsultation />
      <ContactCTA />
    </div>
  )
}

export default ContactPageContent
