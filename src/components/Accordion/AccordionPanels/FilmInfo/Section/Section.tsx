interface Props {
  title: string
  content: string | React.ReactNode
}

const Section = ({ title, content }: Props) => {
  const contentIsString = typeof content === 'string'

  return (
    // <div className="border border-black">
    <div>
      <h4 className={`text-lg font-bold ${contentIsString ? '' : 'mb-3'}`}>
        {title}
      </h4>
      {contentIsString ? <p>{content}</p> : content}
    </div>
  )
}

export default Section
