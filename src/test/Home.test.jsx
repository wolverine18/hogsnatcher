import React from 'react'
import { render, act, fireEvent, waitForElementToBeRemoved, screen, getByText, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import API from '../API'
import Home from '../pages/Home'

jest.mock('../API')
API.getBass = jest.fn(() => {
    let bass = [
        {airTemp: "65", cloudCover: "25", comments: "All on points", conditions: "partly cloudy", date: "2020-04-19", depth: "11", humidity: "56", lure: "Jig", precip: "0", pressure: "30.1", quantity: "6", size: "2-3", userID: "jay", waterClarity: "clear", waterTemp: "48", waypoint: "4d5g8d39d", windDir: "WSW", windSpeed: "16"},
        {airTemp: "60", cloudCover: "20", comments: "On beds", conditions: "cloudy", date: "2020-04-16", depth: "3", humidity: "40", lure: "Dropshot", precip: ".05", pressure: "30.4", quantity: "10", size: "3-4", userID: "caleb", waterClarity: "muddy", waterTemp: "58", waypoint: "4d5g8d35g39d", windDir: "SSW", windSpeed: "5"}
    ]
    return new Promise((resolve) => resolve(bass))
})

describe('Home', () => {
    it('initially displays the loading message', async () => {
        await act(async () => {
          let { getByText } = render(<Home />)
    
          getByText('Loading...')
        })
      })

    it('loads bass when initialized', async () => {
        let { getByText } = render(<Home />)

        await waitForElementToBeRemoved(() => getByText('Loading...'))

        getByText("65")
        getByText("25")
        getByText("All on points")
        getByText("partly cloudy")
        getByText("2020-04-19")
        getByText("11")
        getByText("Jig")
        getByText("0")
        getByText("30.1")
        getByText("6")
        getByText("2-3")
        getByText("jay")
        getByText("clear")
        getByText("48")
        getByText("4d5g8d39d")
        getByText("WSW")
        getByText("16")
        
        getByText("60")
        getByText("20")
        getByText("On beds")
        getByText("cloudy")
        getByText("2020-04-16")
        getByText("3")
        getByText("Dropshot")
        getByText(".05")
        getByText("30.4")
        getByText("10")
        getByText("3-4")
        getByText("caleb")
        getByText("muddy")
        getByText("58")
        getByText("4d5g8d35g39d")
        getByText("SSW")
        getByText("5")
    })
})
