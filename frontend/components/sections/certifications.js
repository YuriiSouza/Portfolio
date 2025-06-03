import { Award, BookOpen } from "lucide-react"

const certifications = [
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    date: "2024",
    type: "certification",
    logo: "/badge-SFC.png",
  },
  {
    name: "Python3",
    issuer: "Curso em Video",
    date: "2022",
    type: "certification",
    logo: "/cursoemvideo-logo.png",
  },
  {
    name: "Web development",
    issuer: "Curso em Video",
    date: "2021",
    type: "certification",
    logo: "/cursoemvideo-logo.png",
  },
  {
    name: "Bacharelado em Engenharia de Software",
    issuer: "UniEvangelica",
    date: "2025",
    type: "education",
    logo: "/logo-universidade.png",
  },
]

const courses = [
  {
    name: "Data Analysis",
    issuer: "Data Science Academy",
    date: "2024",
    logo: "logo-dataanalysis.png",
  },
]

export function Certifications() {
  const educations = certifications.filter((cert) => cert.type === "education")
  const certs = certifications.filter((cert) => cert.type === "certification")

  return (
    <section id="certifications" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Certificações e Formação</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <BookOpen className="h-5 w-5 text-blue-400" />
            Formação Acadêmica
          </h3>
          <div className="space-y-4">
            {educations.map((edu, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 flex items-center justify-center">
                    <img src={edu.logo || "/placeholder.svg"} className="w-16 h-16" />
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-lg font-bold text-white">{edu.name}</h4>
                    <p className="text-gray-400">{edu.issuer}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded text-sm">
                      {edu.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <Award className="h-5 w-5 text-blue-400" />
            Certificações
          </h3>
          <div className="space-y-4">
            {certs.map((cert, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 flex items-center justify-center">
                    <img src={cert.logo || "/placeholder.svg"} className="w-16 h-16" />
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <BookOpen className="h-5 w-5 text-blue-400" />
          Cursos Relevantes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-4 flex items-center justify-center h-32">
                <img src={course.logo || "/placeholder.svg"} alt={course.name} className="w-20 h-20" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-white">{course.name}</h4>
                <p className="text-gray-400">{course.issuer}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded text-sm">
                  {course.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
