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
        <h2 className="text-3xl font-bold">Certificações e Formação</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-400" />
            Formação Acadêmica
          </h3>
          <div className="space-y-4">
            {educations.map((edu, index) => (
              <div key={index} className="card border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 flex items-center justify-center">
                    <img src={edu.logo} className="w-16 h-16" />
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-lg font-bold ">{edu.name}</h4>
                    <p className="muted">{edu.issuer}</p>
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
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-400" />
            Certificações
          </h3>
          <div className="space-y-4">
            {certs.map((cert, index) => (
              <div key={index} className="card border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="bg-gray-900 p-4 flex items-center justify-center">
                    <img src={cert.logo} className="w-16 h-16" />
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <p className="muted">{cert.issuer}</p>
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
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-400" />
          Cursos Relevantes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="card border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 flex items-center justify-center h-32">
                <img src={course.logo} alt={course.name} className="w-20 h-20" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold">{course.name}</h4>
                <p className="muted">{course.issuer}</p>
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
