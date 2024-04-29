import React from 'react'
import renderStars from '../helpers/stars.jsx'
import styles from './Card.module.css'
import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.base};
    background-color: ${props => props.theme.light};
    padding: ${props => props.theme.spacing.small};
    border-radius: ${props => props.theme.spacing.small};
    max-width: 300px;
`;

const CardImage = styled.img`
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
`

const Title = styled.strong`
    font-size: ${props => props.theme.size.large};
`

const BottomSection = styled.div`
  margin-top: auto;
  font-size: ${props => props.theme.size.medium};
`

const Card = ({ info }) => {
    return (
        <CardWrapper>
            <CardImage src={info.image} />
            <Title>{info.title}</Title>
            <p>{info.description}</p>

            <BottomSection>
                <strong>Course rating</strong>
                <hr />
                {renderStars(info.rating)}
            </BottomSection>
        </CardWrapper>
    )
}

export default Card