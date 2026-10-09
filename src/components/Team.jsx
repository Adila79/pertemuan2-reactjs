import ammar from '../assets/ammar.png'
import kaff from '../assets/kaff.png'
import er from '../assets/er.jpg'

function Team() {
  const members = [
    {
      id: 1,
      name: 'Erlangga',
      badge: 'Ketua Tim',
      badgeColor: 'bg-primary',
      role: 'Frontend Developer',
      nim: '0110224204',
      skills: ['React.js', 'Bootstrap 5', 'Git'],
      image: er,
      github: 'https://github.com/raffirmdhn',
      linkedin: 'https://linkedin.com',
      email: 'erlangga@student.nurulfikri.ac.id'
    },
    {
      id: 2,
      name: 'Kaff Abidilah',
      badge: 'Anggota',
      badgeColor: 'bg-secondary',
      role: 'UI/UX Designer',
      nim: '0110224205',
      skills: ['Figma', 'CSS3', 'Wireframing'],
      image: kaff,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'kaff.abidilah@student.nurulfikri.ac.id'
    },
    {
      id: 3,
      name: 'Ammar Muhammad',
      badge: 'Anggota',
      badgeColor: 'bg-secondary',
      role: 'Backend Developer',
      nim: '0110224206',
      skills: ['Node.js', 'REST API', 'Database'],
      image: ammar,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'ammar.muhammad@student.nurulfikri.ac.id'
    }
  ]

  return (
    <div className="container my-5 py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Anggota Tim Pengembang</h2>
        <p className="text-muted">Tim praktikum Pemrograman Web - STT Terpadu Nurul Fikri</p>
      </div>

      <div className="row g-4">
        {members.map((member) => (
          <div className="col-md-4" key={member.id}>
            <div className="card h-100 shadow-sm border">
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ height: '230px', objectFit: 'cover' }}
              />
              <div className="card-body text-center d-flex flex-column">
                <div className="mb-2">
                  <span className={`badge ${member.badgeColor}`}>{member.badge}</span>
                </div>
                <h5 className="card-title fw-semibold mb-1">{member.name}</h5>
                <p className="card-text text-primary fw-medium mb-1">{member.role}</p>
                <small className="text-muted mb-3">NIM: {member.nim}</small>

                <div className="d-flex justify-content-center gap-1 mb-3 flex-wrap">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="badge bg-light text-dark border">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-top d-flex justify-content-center gap-3">
                  <a href={member.github} target="_blank" rel="noreferrer" className="text-secondary" title="GitHub">
                    <i className="bi bi-github fs-5"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-secondary" title="LinkedIn">
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                  <a href={`mailto:${member.email}`} className="text-secondary" title="Email">
                    <i className="bi bi-envelope fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
