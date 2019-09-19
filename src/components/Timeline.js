import React, { useLayoutEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Colors = [
  'rgb(190, 31, 14)',
  'rgb(130, 59, 134)',
  'rgb(2, 130, 174)',
  'rgb(188, 114, 27)'
]

const OneYear = 1000 * 60 * 60 * 24 * 365

const Container = styled.div`
  width: 100%;
`

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
  font-size: 0.5em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
  padding-left: 6px;
  display: flex;
`

const Year = styled.li`
  list-style-type: none;
  font-size: 0.5em;
`

const Timeline = props => {
  const { data, containerWidth = 0 } = props

  const containerRef = useRef()

  const [timeLineWidth, setTimeLineWidth] = useState(0)

  useLayoutEffect(() => {
    if (containerRef.current) {
      setTimeLineWidth(containerWidth || containerRef.current.offsetWidth)
    }
  }, [containerWidth])

  if (!data) {
    return null
  }

  if (!data.length) {
    console.warn('Timeline component data is empty')
    return null
  }

  const firstStartDate = data[0].startDate

  if (!firstStartDate || !(firstStartDate instanceof Date)) {
    console.warn('Timeline component has invalid start date for first event')
    return null
  }

  const lastEndDate = data[data.length - 1].endDate

  if (!lastEndDate || !(lastEndDate instanceof Date)) {
    console.warn('Timeline component has invalid end date for last event')
    return null
  }

  let ovelappingEvents = false
  data.forEach(event => {
    const otherEvents = data.filter(e => e !== event)
    otherEvents.forEach(e => {
      if (
        (e.startDate > event.startDate && e.endDate < event.endDate) ||
        (e.startDate < event.startDate && e.endDate > event.startDate)
      ) {
        ovelappingEvents = true
      }
    })
  })

  if (ovelappingEvents) {
    console.warn('Overlapping events found in timeline. This is not supported.')
    return null
  }

  const firstYear = firstStartDate.getFullYear()
  const lastYear = lastEndDate.getFullYear()
  const yearElements = []
  const yearMarkers = []

  const numYears = lastYear - firstYear + 1
  const yearWidth = parseInt(timeLineWidth / numYears)
  const circleRadius = 3
  const circleStrokeWidth = 1
  const lineStrokeWidth = 1

  for (var y = firstYear, index = 0; y < lastYear + 1; y++, index++) {
    yearElements.push(
      <Year
        key={y}
        style={{
          width: `${yearWidth}px`
        }}
      >
        <div>{y % 2 === 0 ? y : ''}</div>
      </Year>
    )

    yearMarkers.push(
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
    )
  }

  return (
    <Container ref={containerRef}>
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
          {yearMarkers}
        </YearsSvg>

        {/* TODO: magic number for left margin */}
        <Years style={{ marginLeft: '14px' }}>{yearElements}</Years>
      </YearsContainer>
    </Container>
  )
}

export default Timeline

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      startDate: PropTypes.instanceOf(Date).isRequired,
      endDate: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  containerWidth: PropTypes.number
}
