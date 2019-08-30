import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px 0;
  font-size: 0.5em;
  font-weight: bold;
`

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const formatMonth = date => Months[date.getMonth()]

const formatEndDate = date =>
  date.getFullYear() === new Date().getFullYear()
    ? 'Present'
    : `${formatMonth(date)}, ${date.getFullYear()}`

const formatDateRange = (startDate, endDate) =>
  `${formatMonth(startDate)}, ${startDate.getFullYear()} - ${formatEndDate(
    endDate
  )}`

const ExperienceDates = props => {
  const { startDate, endDate } = props
  return <Container>{formatDateRange(startDate, endDate)}</Container>
}

export default ExperienceDates
