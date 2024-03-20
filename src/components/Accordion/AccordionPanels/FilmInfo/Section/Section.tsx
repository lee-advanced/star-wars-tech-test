interface Props {
  title: string
  copy: string
}

const Section = ({ title, copy }: Props) => {
  return (
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p>{copy}</p>
    </div>
  )
}

export default Section
