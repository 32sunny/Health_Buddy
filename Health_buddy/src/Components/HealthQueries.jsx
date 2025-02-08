import React, { useState } from 'react';
import '../styling/HealthQueries.css';

const healthQueriesData = [
  {
    id: 1,
    title: "Not able to sleep",
    views: 18,
    content: "Active during day time but at night when I go to bed and about to sleep feels li...",
    fullContent: "Active during day time but at night when I go to bed and about to sleep feels like I'm fully active and can't sleep. This has been happening for the past week."
  },
  {
    id: 2,
    title: "Prolactin level",
    views: 13,
    content: "Hi. My prolactin level is 32. Is it a serious elevation or mild? I have pcos too...",
    fullContent: "Hi. My prolactin level is 32. Is it a serious elevation or mild? I have pcos too and I'm worried about these results. Should I consult an endocrinologist?"
  },
  {
    id: 3,
    title: "Infection in private part",
    views: 10,
    content: "Too much itching in the private part and more infection in the private part for ...",
    fullContent: "Too much itching in the private part and more infection in the private part for the past few days. Please suggest what could be done."
  }
]

const HealthQueries = () => {
  const [expandedQuery, setExpandedQuery] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedQuery(expandedQuery === id ? null : id);
  };

  return (
    <div className="health-queries-container">
      <h1 className="health-queries-title">Health Queries</h1>
      
      <div className="queries-grid">
        {healthQueriesData.map((query) => (
          <div key={query.id} className="query-card">
            <div className="query-header">
              <h2 className="query-title">{query.title}</h2>
              <span className="query-views">{query.views} Views</span>
            </div>
            
            <p className="query-content">
              {expandedQuery === query.id ? query.fullContent : query.content}
              <button
                onClick={() => toggleReadMore(query.id)}
                className="read-more-btn"
              >
                {expandedQuery === query.id ? 'Read less' : 'Read more'}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthQueries;