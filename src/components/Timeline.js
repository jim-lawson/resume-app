import React from 'react'
import styled from 'styled-components'

const Colors = [
  'rgb(190, 31, 14)',
  'rgb(130, 59, 134)',
  'rgb(2, 130, 174)',
  'rgb(188, 114, 27)'
]

const OneYear = 1000 * 60 * 60 * 24 * 365

const Periods = styled.div`
  margin-bottom: -10px;
  display: flex;
`

const Period = styled.div`
  border-left: 1px dashed #555;
  box-sizing: border-box;
  padding-bottom: 10px;
`

const PeriodText = styled.div`
  padding: 0 5px 5px 5px;
  font-size: 10px;
`

const PeriodBar = styled.div`
  border-radius: 10px;
  height: 10px;
`

// TODO - magic number for left margin
const YearsContainer = styled.div`
  margin-left: -29px;
`

const YearsSvg = styled.svg`
  circle:nth-child(4n + 4) {
    fill: white;
  }
`

const Years = styled.ul`
  display: flex;
`

const Year = styled.li`
  list-style-type: none;
  font-size: 10px;
  text-align: center;
`

const Timeline = props => {
  const { data } = props

  const firstYear = data[0].startDate.getFullYear()
  const lastYear = data[data.length - 1].endDate.getFullYear()
  const yearElements = []

  const numYears = lastYear - firstYear + 2
  const timeLineWidth = 750
  const yearWidth = parseInt(timeLineWidth / numYears)
  const circleRadius = 3
  const circleStrokeWidth = 1
  const lineStrokeWidth = 1

  for (var y = firstYear; y < lastYear + 2; y++) {
    yearElements.push(
      <Year key={y} style={{ width: `${yearWidth}px` }}>
        <div>{y % 2 === 0 ? y : ''}</div>
      </Year>
    )
  }

  return (
    <div>
      <Periods>
        {data.map((entry, index) => {
          let timeGap = 0
          if (index === 0) {
            timeGap = (entry.startDate.getMonth() * yearWidth) / 12
          } else {
            timeGap =
              ((entry.startDate.getTime() - data[index - 1].endDate.getTime()) /
                OneYear) *
              yearWidth
          }
          return (
            <Period
              key={index}
              style={{
                marginLeft: `${timeGap}px`,
                width: `${yearWidth *
                  ((entry.endDate.getTime() - entry.startDate.getTime()) /
                    OneYear)}px`
              }}
            >
              <PeriodText>{entry.label}</PeriodText>
              <PeriodBar
                style={{
                  background: Colors[(index + Colors.length) % Colors.length]
                }}
              />
            </Period>
          )
        })}
      </Periods>
      <YearsContainer>
        <YearsSvg
          style={{
            marginLeft: '25px',
            width: 'calc(100% - 25px)',
            height: `${circleRadius * 2 + circleStrokeWidth * 2}px`
          }}
        >
          <line
            x1={circleRadius}
            y1={circleRadius + circleStrokeWidth / 2}
            x2={timeLineWidth}
            y2={circleRadius + circleStrokeWidth / 2}
            stroke="black"
            strokeWidth={lineStrokeWidth}
          />
          {// TODO: Don't render last line, also use a for loop instead of allocating an array
          new Array(yearElements.length)
            .fill()
            .map((year, index) =>
              index % 2 === 0 ? (
                <circle
                  key={index}
                  cx={circleRadius + circleStrokeWidth + index * yearWidth}
                  cy={circleRadius + circleStrokeWidth}
                  r={circleRadius}
                  strokeWidth={circleStrokeWidth}
                  stroke="black"
                />
              ) : (
                <line
                  key={index}
                  x1={circleRadius + circleStrokeWidth + index * yearWidth}
                  y1={0}
                  x2={circleRadius + circleStrokeWidth + index * yearWidth}
                  y2={circleRadius * 2 + circleStrokeWidth * 2}
                  stroke="black"
                />
              )
            )}
        </YearsSvg>

        {/* TODO: magic number for left margin */}
        <Years style={{ marginLeft: '14px' }}>{yearElements}</Years>
      </YearsContainer>
    </div>
  )
}

export default Timeline
