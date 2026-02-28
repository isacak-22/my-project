
import React from "react";
import { useNavigate } from 'react-router-dom';
import journals from './JournalsData';

function Journals() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <h2 className="text-white text-center py-4 mb-3 bg-success">Library International-Upcoming Issues</h2>
      </div>
      <div className="container py-5">
        <div className="row">
          {journals.map((journal) => (
            <div
              className="col-6 col-md-3 mb-4"
              key={journal.id}
              onClick={() => navigate(`/journal/${journal.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="card p-3 text-center shadow h-100 position-relative overflow-hidden"
                style={{
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#198754';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(25,135,84,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                <div className="position-absolute top-0 end-0 bg-success text-white p-2 rounded-start fs-6 fw-bold">
                  View →
                </div>
                <img
                  src={journal.image}
                  alt={journal.short}
                  style={{ height: "220px", objectFit: "contain" }}
                />
                <h6 className="mt-3 mb-2">{journal.title}</h6>
                <p className="text-muted mb-0 small">({journal.short})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Journals;
