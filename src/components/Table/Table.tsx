export interface TableData {
  [key: string]: string | number
}

interface Props {
  title?: string
  tableHeaders: string[]
  tableData: TableData[]
  color?: 'black' | 'white'
}

const Table = ({ title, tableHeaders, tableData, color = 'black' }: Props) => {
  const mapHeaders = (list: string[]) =>
    list.map((item, index) => (
      <th
        key={`${title}-table-column-header-${index}`}
        className="text-sw-red-saturated"
      >
        {item}
      </th>
    ))
  const mapData = (list: TableData[]) =>
    list.map((item, index) => (
      <tr key={`${title}-table-row-${index}`}>
        {tableHeaders.map((header, index) => (
          <td
            key={`${title}-table-row-${index}-cell-${index}`}
            className={`border-b border-${color} border-opacity-50 text-center`}
          >
            {item[header.toLowerCase()]}
          </td>
        ))}
      </tr>
    ))

  return (
    <div className={`text-${color}`}>
      {title && (
        <>
          <h4 className="text-lg font-bold text-sw-red-saturated">{title}</h4>
          <hr className={`border-${color} opacity-50 w-1/3 mb-4`} />
        </>
      )}
      <table className="w-full">
        <thead>
          <tr>{mapHeaders(tableHeaders)}</tr>
        </thead>
        <tbody>{mapData(tableData)}</tbody>
      </table>
    </div>
  )
}

export default Table
