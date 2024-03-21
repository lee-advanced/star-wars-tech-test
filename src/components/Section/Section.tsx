interface Props {
  title: string
  content: string
}

const Section = ({ title, content }: Props) => {
  return (
    <div>
      <h4 className="text-lg font-bold text-sw-red-saturated">{title}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Section
