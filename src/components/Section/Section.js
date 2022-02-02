import styles from './Section.module.scss';

const Section = ({ children, className, backgroundColor, ...rest }) => {
  let sectionClassName = styles.section;

  if ( className ) {
    sectionClassName = `${sectionClassName} ${className}`
  }

  return (
    <section className={sectionClassName} data-background-color={backgroundColor} {...rest}>
      { children }
    </section>
  )
}

export default Section;