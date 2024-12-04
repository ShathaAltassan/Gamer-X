import React from 'react';
import MainLayout from '../Layout/MainLayout';

const About = () => {
  return (
    <div className="bill-back">
      <MainLayout>
        <div className="about-page">
          <h1 className="about-title">حولنا - GamerX</h1>
          
          <div className="about-content">
            <div className="about-sections-container">
              <section className="about-section">
                <h2 className="section-title">من نحن؟</h2>
                <p className="section-text">
                  مرحبا بكم في <strong>GamerX</strong>! نحن متجر مخصص لبيع ألعاب الفيديو، نقدم لكم مجموعة متنوعة من الألعاب
                  المميزة لجميع الأجهزة. سواء كنت لاعبًا مبتدئًا أو محترفًا، لدينا ما يناسبك.
                </p>
              </section>

              <section className="about-section">
                <h2 className="section-title">رؤيتنا</h2>
                <p className="section-text">
                  رؤيتنا في <strong>GamerX</strong> هي توفير أفضل تجربة تسوق للاعبين، من خلال تقديم أحدث الألعاب وأعلى
                  جودة من حيث الخدمة. نهدف إلى أن نكون وجهة اللاعبين الأولى في المنطقة.
                </p>
              </section>

              <section className="about-section">
                <h2 className="section-title">مهمتنا</h2>
                <p className="section-text">
                  مهمتنا هي أن نجعل اللاعبين يشعرون بالتواصل مع مجتمع الألعاب، من خلال توفير منصة سهلة وآمنة لشراء
                  ألعابهم المفضلة. نحن نسعى دائمًا لتوفير أفضل العروض والخصومات.
                </p>
              </section>

              <section className="about-section">
                <h2 className="section-title">قيمنا</h2>
                <p className="section-text">
                  في <strong>GamerX</strong>، نحن نؤمن بعدد من القيم التي توجه عملنا. نزاهتنا في التعامل مع العملاء،
                  والتزامنا بتقديم أفضل جودة في الألعاب، فضلاً عن الابتكار المستمر في جميع جوانب العمل، هي الأسس التي تقوم
                  عليها شركتنا.
                </p>
              </section>

            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
