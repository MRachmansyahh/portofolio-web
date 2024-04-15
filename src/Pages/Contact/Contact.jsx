import React from 'react'

const Contact = () => {
  const data = [
    {
      id: 1,
      name: 'phone number',
      contact: '+6285156025853',
      icon: '',
    },
    {
      id: 2,
      name: 'WhatsApp',
      contact: '+6285156025853',
      icon: '',
    },
    {
      id: 3,
      name: 'mail',
      contact: 'rachmansyah.poetra@gmail.com',
      icon: '',
    },
    {
      id: 4,
      name: 'location',
      contact: 'South Tangerang, Banten, Indonesia, 15314',
      icon: '',
    }
  ]
  return (
    <div className="flex gap-6">
      <div className="w-1/3 space-y-6">
        <h3 className="uppercase text-xl">contact info</h3>
        <div className="space-y-20">
          {data.map((x, id) => (
            <div className="flex gap-6">
              <div className="rounded-3xl bg-secondary p-6 space-y-4">
                {x.icon}
              </div>
              <div>
                <p className="text-tertiary uppercase">{x.name}</p>
                <p>{x.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 rounded-3xl bg-secondary p-6 space-y-4">
        <h1 className="text-5xl">
          Let's work <span className="text-blue-600">together</span>
        </h1>
        <button className="btn bg-fourtiary hover:bg-white hover:text-secondary transition-colors duration-300 p-4 rounded-2xl w-full">
          <a href="./contact.html" className="text-sm">
            Send Message
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact