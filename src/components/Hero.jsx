


const Hero = ({ title, subtitle, ctaLink, ctaText }) => {
  return (
     <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
                    <p className="mt-3 text-xl text-gray-300 sm:mt-4">{subtitle}</p>
                    <Link to={ctaLink} className="mt-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Hero