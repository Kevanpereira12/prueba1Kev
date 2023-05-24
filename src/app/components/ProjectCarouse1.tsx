"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Carousel, Button } from "react-bootstrap";

interface Repo {
  id: number;
  name: string;
  description: string;
}

function ProjectCarouse1() {
  
  const [index, setIndex] = useState(0);
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(repos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index === repos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/Kevanpereira12/repos');
      const data = await response.json();
      setRepos(data);
    };
    fetchData();
  }, []);

  return (
    <div className='.container'>
      <div className=".container">
        <section id="Projects">
          <h2>Mis repositorios de github:</h2>
          <Carousel activeIndex={index} onSelect={handleSelect} prevIcon={<Button variant="outline-light" onClick={handlePrevClick}>Back</Button>} nextIcon={<Button variant="outline-light" onClick={handleNextClick}>Next</Button>}>
            {repos.map((repo) => (
              <Carousel.Item key={repo.id}>
                {repo.name}
                {/* {repo.description} */}
                <Carousel.Caption>
                  <div className=".container">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default ProjectCarouse1;
