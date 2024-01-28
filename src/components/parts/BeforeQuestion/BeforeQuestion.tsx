import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  setQuestionNumber: (value: number) => void
}

export const BeforeQuestion: FC<Props> = ({ setQuestionNumber }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10)
    if (!isNaN(value)) {
      setQuestionNumber(value)
    }
  }
  return (
    <div>
      <FormControl>
        <FormLabel>質問はいくつにしますか？</FormLabel>
        <Select defaultValue="3" onChange={handleChange}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </Select>
      </FormControl>
    </div>
  )
}
