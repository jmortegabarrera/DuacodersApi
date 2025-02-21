import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1740080177687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`duacoders\` (\`nif\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`biography\` varchar(255) NOT NULL, \`department\` varchar(255) NOT NULL, \`position\` varchar(255) NOT NULL, \`skills\` text NOT NULL, \`photoUrl\` varchar(255) NOT NULL, \`likesOnionTortilla\` tinyint NOT NULL, \`birthDate\` datetime NULL, UNIQUE INDEX \`IDX_7a414303fd8c85c69e11ad406f\` (\`nif\`), PRIMARY KEY (\`nif\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`dead_letter_entity\` (\`id\` varchar(36) NOT NULL, \`message\` varchar(255) NOT NULL, \`stackTrace\` json NULL, \`type\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `INSERT INTO \`users\` VALUES ('a88dbaec-df19-4230-b869-a0b7b90c0472','root','$2b$10$ckaEj4bYmFya18AYUzVhzec59FzaTvboIKRTAfqCahBnvqtUZgSl2');`,
    );
    await queryRunner.query(`INSERT INTO \`duacoders\` (\`nif\`, \`name\`, \`biography\`,  \`department\`, \`position\`, \`skills\`, \`photoUrl\`,  \`likesOnionTortilla\`, \`birthDate\`) 
VALUES 
('22183310V', 'Julio de Jimenez', 'Laborum possimus optio repudiandae voluptatem cupiditate. Suscipit perspiciatis in eius illo optio accusantium ipsum. Sequi occaecati harum deserunt quo deleniti.', 'Accommodation manager', 'Applications developer', 'Node.js, Vue.js, NestJS', 'https://www.lorempixel.com/400/400', true, '1995-01-24'),
('34542345X', 'Laura Garcia', 'Quisquam iusto voluptatibus deserunt non esse amet. Fugiat odit doloremque provident.', 'Sales', 'Marketing Specialist', 'JavaScript, React, HTML', 'https://www.lorempixel.com/400/400', false, '1988-03-18'),
('87654321Y', 'Miguel Torres', 'Voluptates et magnam corrupti optio nihil. Labore tempora exercitationem soluta eos ipsa.', 'Finance', 'Accountant', 'Excel, SAP', 'https://www.lorempixel.com/400/400', true, '1992-06-12'),
('12233445B', 'Ana Martínez', 'Autem dolor suscipit veniam nihil. Tempora reiciendis eum similique.', 'HR', 'Recruiter', 'HR Management, SAP SuccessFactors', 'https://www.lorempixel.com/400/400', true, '1990-09-30'),
('77889901C', 'David Perez', 'Aperiam veritatis quia labore quia quos. Qui quia et molestias est dolore officia.', 'Legal', 'Lawyer', 'Civil Law, Contract Negotiation', 'https://www.lorempixel.com/400/400', false, '1985-11-05'),
('99887766A', 'Sofia López', 'Molestias occaecati atque rem laborum deserunt suscipit ex. Quo qui magni voluptate aliquid.', 'Sales', 'Sales Manager', 'Negotiation, Communication', 'https://www.lorempixel.com/400/400', true, '1987-01-14'),
('44556633D', 'Carlos Ruiz', 'Fuga aliquam tempora aliquam at doloribus. Laboriosam provident pariatur amet recusandae et est.', 'IT', 'Software Engineer', 'JavaScript, Node.js', 'https://www.lorempixel.com/400/400', true, '1984-08-09'),
('12345678E', 'Isabel Fernández', 'Aliquam est soluta optio excepturi asperiores sed. Nihil eos deleniti numquam tempora.', 'Customer Support', 'Support Specialist', 'Customer Service, Salesforce', 'https://www.lorempixel.com/400/400', true, '1990-02-22'),
('98765432F', 'Jose Luis Martín', 'Repellat quaerat aut voluptatibus. Qui qui veniam aliquam error quo.', 'Marketing', 'Brand Manager', 'Digital Marketing, Content Creation', 'https://www.lorempixel.com/400/400', true, '1991-07-01'),
('11223344G', 'Elena Ruiz', 'Est cumque qui expedita explicabo. Cumque consectetur quos exercitationem quae id.', 'Operations', 'Logistics Coordinator', 'Operations Management, Lean', 'https://www.lorempixel.com/400/400', false, '1992-12-10'),
('99887755H', 'Pedro Rodríguez', 'Eaque quibusdam sint asperiores odio. Ab alias rerum facilis distinctio iure.', 'Finance', 'Financial Analyst', 'Finance, Analysis', 'https://www.lorempixel.com/400/400', true, '1986-09-20'),
('22119988I', 'Rosa Sánchez', 'Voluptatibus ab debitis tempora dolore cum ipsum. Magni dolorum consequatur nihil sit et.', 'HR', 'HR Manager', 'Talent Acquisition, Employee Relations', 'https://www.lorempixel.com/400/400', true, '1983-03-16'),
('33445566J', 'Luis López', 'Asperiores aliquam velit odit. Dolore veniam quasi dolore libero.', 'IT', 'Frontend Developer', 'React, JavaScript', 'https://www.lorempixel.com/400/400', false, '1993-06-25'),
('55667788K', 'Maria García', 'Amet esse aliquam consequatur et distinctio. Hic beatae numquam magni sequi.', 'IT', 'Backend Developer', 'Node.js, Express', 'https://www.lorempixel.com/400/400', true, '1994-12-17'),
('77889900L', 'Juan González', 'Deserunt amet quasi nisi fuga. Magnam dolore facere corrupti impedit.', 'Legal', 'Contract Manager', 'Contract Law, Dispute Resolution', 'https://www.lorempixel.com/400/400', true, '1992-05-10'),
('99001122M', 'Raúl Pérez', 'Culpa magnam fuga deserunt quidem amet eius. Sit ab autem optio quae et.', 'Customer Support', 'Support Technician', 'Troubleshooting, Zendesk', 'https://www.lorempixel.com/400/400', false, '1991-08-14'),
('22334455N', 'Verónica Díaz', 'Asperiores recusandae rerum laborum. Quo sint provident adipisci est.', 'Sales', 'Sales Representative', 'Salesforce, Client Relationship', 'https://www.lorempixel.com/400/400', true, '1987-04-05'),
('66778899O', 'Antonio Pérez', 'Veritatis quia laborum debitis veniam. Voluptas sit eligendi quibusdam quis hic.', 'Finance', 'Account Manager', 'Financial Reporting, Analysis', 'https://www.lorempixel.com/400/400', false, '1984-07-23'),
('11223377P', 'Pablo Martínez', 'Non molestias consequatur eum veritatis. Qui corporis atque optio explicabo et odio.', 'Marketing', 'Content Strategist', 'SEO, Content Marketing', 'https://www.lorempixel.com/400/400', true, '1990-09-12'),
('33445577Q', 'Marta Pérez', 'Velit dolore aut dolore quam. Laborum adipisci aspernatur vel veniam est.', 'Operations', 'Operations Manager', 'Supply Chain Management', 'https://www.lorempixel.com/400/400', true, '1993-03-04'),
('55667777R', 'José Gómez', 'Doloremque quisquam voluptatibus quaerat. Quo in aliquid eius temporibus exercitationem.', 'Customer Support', 'Technical Support', 'Troubleshooting, Customer Care', 'https://www.lorempixel.com/400/400', false, '1986-02-14'),
('99887777S', 'Sara López', 'Sint consectetur deserunt cum nulla. Similique mollitia impedit quos rerum corporis.', 'Legal', 'Paralegal', 'Legal Research, Drafting', 'https://www.lorempixel.com/400/400', true, '1989-11-25'),
('22114455T', 'Javier García', 'Voluptatem impedit nulla pariatur optio. Et id quaerat at temporibus atque.', 'HR', 'Employee Relations Manager', 'HR Policies, Employee Engagement', 'https://www.lorempixel.com/400/400', true, '1990-01-10'),
('33449900U', 'Rocío Martín', 'Velit similique eum suscipit impedit. Facilis quaerat suscipit tempora qui.', 'IT', 'Full Stack Developer', 'Node.js, React, MongoDB', 'https://www.lorempixel.com/400/400', true, '1992-02-28'),
('55668888V', 'Alberto López', 'Tempora maiores numquam ex quos. Ex explicabo dolores error aut qui.', 'Sales', 'Sales Executive', 'B2B Sales, Lead Generation', 'https://www.lorempixel.com/400/400', true, '1988-07-16'),
('77889999W', 'Patricia Díaz', 'Repellat enim voluptas a nisi error. Molestiae consequatur enim consectetur labore.', 'Operations', 'Process Improvement Specialist', 'Lean Six Sigma', 'https://www.lorempixel.com/400/400', false, '1991-03-08'),
('99002222X', 'David Sánchez', 'Ipsum nemo autem maiores quos. Voluptatibus consequatur voluptatibus molestiae est.', 'Finance', 'Investment Analyst', 'Investment Banking, Analysis', 'https://www.lorempixel.com/400/400', true, '1990-12-04'),
('22334466Y', 'Beatriz Fernández', 'Dolores veniam necessitatibus voluptas. Quos rerum soluta perferendis saepe est.', 'HR', 'HR Assistant', 'Recruitment, HR Policies', 'https://www.lorempixel.com/400/400', true, '1992-04-14'),
('66778800Z', 'José Luis García', 'Ipsam mollitia pariatur vel odio. Dolorem consequatur distinctio deleniti eum et.', 'Customer Support', 'Help Desk Specialist', 'Customer Support, IT Solutions', 'https://www.lorempixel.com/400/400', false, '1989-09-17'),
('11223388A', 'Carmen Rodríguez', 'Exercitationem voluptatem explicabo optio similique. Fugiat ut aspernatur aut quibusdam.', 'Legal', 'Legal Advisor', 'Corporate Law, Legal Advice', 'https://www.lorempixel.com/400/400', true, '1993-01-09'),
('33445588B', 'José Antonio Ruiz', 'Atque repellat eum officia mollitia nisi neque. Facere est veritatis numquam recusandae.', 'Marketing', 'Market Research Analyst', 'Market Research, Consumer Insights', 'https://www.lorempixel.com/400/400', true, '1991-11-02'),
('55667799C', 'Ana Martínez', 'Consequuntur excepturi asperiores nulla reiciendis. Laboriosam rem adipisci quaerat quo.', 'IT', 'Systems Administrator', 'Linux, IT Support', 'https://www.lorempixel.com/400/400', false, '1992-09-29'),
('99887766D', 'Fernando Ruiz', 'Quasi deserunt nobis ex. Quod beatae veniam nisi et.', 'Sales', 'Account Executive', 'Business Development, Sales Strategies', 'https://www.lorempixel.com/400/400', true, '1985-10-19'),
('22119977E', 'Natalia García', 'Commodi nisi sunt beatae esse non quam. Consequatur veniam similique fugiat sit.', 'Finance', 'Controller', 'Accounting, Finance Management', 'https://www.lorempixel.com/400/400', false, '1989-12-01'),
('33445599F', 'Carolina López', 'Quisquam exercitationem accusantium cumque. Laboriosam et voluptas quasi fugiat.', 'IT', 'Network Engineer', 'Networking, Security', 'https://www.lorempixel.com/400/400', true, '1988-10-20'),
('55667711G', 'María Rodríguez', 'Expedita aut est ut. Neque veniam eveniet rerum ratione enim.', 'Legal', 'Legal Counsel', 'Employment Law, Contract Negotiation', 'https://www.lorempixel.com/400/400', true, '1992-05-18'),
('77889922H', 'Carlos Díaz', 'Rerum doloribus alias exercitationem totam. Consequuntur sunt reiciendis recusandae.', 'Marketing', 'SEO Specialist', 'SEO, Digital Marketing', 'https://www.lorempixel.com/400/400', false, '1993-10-09'),
('99003344I', 'José Hernández', 'Repudiandae in aliquid mollitia consequatur enim. Aperiam suscipit deserunt dolor vero.', 'Customer Support', 'Customer Support Engineer', 'Technical Support, Customer Care', 'https://www.lorempixel.com/400/400', true, '1990-07-30');
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`dead_letter_entity\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_7a414303fd8c85c69e11ad406f\` ON \`duacoders\``,
    );
    await queryRunner.query(`DROP TABLE \`duacoders\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
