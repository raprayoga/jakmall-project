import React from 'react'
import Badge from '@/components/elements/Badge'
import {
  StyledBadgeTitle,
  StyledChevronRight,
  StyledTabItem,
  StyledTabWraper,
} from './tab-styling'

const badges = [
  {
    number: 1,
    title: 'delivery',
  },
  {
    number: 2,
    title: 'payment',
  },
  {
    number: 3,
    title: 'finish',
  },
]

interface BadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number
}

const Badges = ({ step }: BadgesProps) => {
  return badges.map((badge) => (
    <>
      <StyledTabItem key={badge.number}>
        <Badge isactive={badge.number <= step}>{badge.number}</Badge>
        <StyledBadgeTitle>{badge.title}</StyledBadgeTitle>
      </StyledTabItem>
      {badge.number < 3 && <StyledChevronRight />}
    </>
  ))
}

function Tab({ step, ...props }: BadgesProps) {
  return (
    <StyledTabWraper {...props}>
      <Badges step={step} />
    </StyledTabWraper>
  )
}

export { Tab }
