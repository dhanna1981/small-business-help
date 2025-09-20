import { useState } from 'react'

export function useCalculators() {
  const [pcmpEmployees, setPcmpEmployees] = useState([10])
  const [solarUsage, setSolarUsage] = useState([1000])
  const [solarSavings, setSolarSavings] = useState([15])

  const pcmpSavings = pcmpEmployees[0] * 620
  const annualSolarSavings = (solarUsage[0] * 12 * 0.12 * solarSavings[0]) / 100

  return {
    pcmpEmployees,
    setPcmpEmployees,
    solarUsage,
    setSolarUsage,
    solarSavings,
    setSolarSavings,
    pcmpSavings,
    annualSolarSavings
  }
}