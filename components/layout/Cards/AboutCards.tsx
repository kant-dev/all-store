import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlobeIcon, Heart, ShieldCheckIcon, UsersIcon } from 'lucide-react'
import React from 'react'

const categoryIcons: Record<string, React.ReactNode> = {
  'Quality First': <ShieldCheckIcon size={70} />,
  'Costumer Focus': <UsersIcon size={70} />,
  'Global Reach': <GlobeIcon size={70} />,
  'Community Care': <Heart size={70} />,
}

const CardValues = [
  {
    icon: categoryIcons['Quality First'],
    title: 'Quality First',
    description: 'We ensure every product meets our high standards of quality and excellence.',
  },
  {
    icon: categoryIcons['Costumer Focus'],
    title: 'Costumer Focus',
    description: "Your satisfaction is our top priority. We're here to serve you better.",
  },
  {
    icon: categoryIcons['Global Reach'],
    title: 'Global Reach',
    description: 'Connecting customers with quality products from around the world.',
  },
  {
    icon: categoryIcons['Community Care'],
    title: 'Community Care',
    description: 'Committed to making a positive impact in our community.',
  },
]

export default function AboutCards() {
  return (
    <div className='w-full flex justify-center py-8'>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 px-6">
        {
          CardValues.map(({ icon, title, description }, index) => (
            <Card key={index} >
              <CardHeader className="flex justify-center items-start px-6">
                <div>
                  {icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold lg:text-2xl">{title}</CardTitle>
              <CardDescription className="text-gray-500 text-md">{description}</CardDescription>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}
