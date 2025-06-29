As a part of major project for uni, read about this project :

## Node.js, MongoDB, Express

1.3 Objectives of the Project
The goal of this project is to develop a modern, scalable, and secure IPO Web Application that serves both administrative and retail investor needs. The specific objectives include:
•	To build a secure and modular web platform that allows users to browse upcoming IPOs, apply bids, and track their allotments seamlessly from one interface.
•	To enable admin-level control panels where authorized users can publish IPO details, upload documents, manage listings, and monitor bid analytics.
•	To automate investor onboarding, KYC integration, bid validation, and result generation using server-side logic and audit-safe design.
•	To implement responsive UI/UX design for accessibility across devices, supporting real-time feedback and visual clarity.
•	 To structure the platform for future extensibility, such as integration with live stock market APIs, payment gateways, and notification systems.

1.4 Scope of the Project
The project was scoped to deliver a Minimum Viable Product (MVP) in the first phase, followed by advanced features and optimization in later sprints. The scope is divided as:
Functional Scope
•	Investor registration & secure login
•	IPO listings and detail views
•	Role-based access control (admin vs user)
•	Bid placement and tracking system
•	Admin panel for IPO creation, uploads, and statistics
Technical Scope
•	Full-stack architecture using React, Node.js, and MongoDB/PostgreSQL
•	RESTful API design with JWT-based authentication
•	Integration with mock SEBI-compliant UPI payment simulation
•	State management, modular routing, secure form validations
  Exclusions
•	No live integration with SEBI or NSE/BSE APIs
•	Real monetary transactions and broker interfaces excluded
•	Advanced features like AI-based risk prediction and payment gateway integration reserved for future phases

1.5 Internship Experience and Team Leadership
This project was executed during my final-semester internship as part of the academic curriculum. I took on the dual responsibility of project lead and full-stack developer, overseeing both the development pipeline and the mentoring of junior team members involved in the project.
In my role as Team Leader, I was accountable for planning, executing, and monitoring the technical roadmap of the IPO Web Application over a four-month development cycle. I organized and led weekly sprint reviews, set coding standards, and coordinated the division of work across modules to ensure timely delivery of core features such as user authentication, IPO listing, bid placement, and admin panel controls.
Key responsibilities included:
•	Designing the application architecture and setting up the full-stack environment using React, Node.js, and MongoDB/PostgreSQL
•	Conducting code reviews, managing GitHub repositories, enforcing clean commits, and merging pull requests
•	Mentoring juniors on topics such as React state management, RESTful API integration, secure authentication, and modular component design
•	Implementing CI/CD pipelines, frontend testing, and basic deployment workflows for staging environments
•	Facilitating pair programming sessions and one-on-one guidance to teach debugging, testing strategies, and version control best practices
This experience significantly enhanced my leadership, problem-solving, and technical mentoring skills while delivering a fully functional IPO management platform aligned with academic and industry-grade standards.

## Chapter 2: 
# Requirement Analysis

2.1 Business Requirements
1. Stakeholders: Admins, Investors, Regulators
The IPO Web Application has three primary stakeholder groups, each with distinct roles, permissions, and expectations:
1. Investors (Retail Users):
These are end-users who access the platform to explore, analyze, and bid on upcoming IPOs. They require:
•	Seamless registration and KYC verification
•	A real-time IPO catalog with filters and analytics
•	Transparent bid placement and status tracking
•	Notifications regarding allotments and deadlines
2. Admins (Internal Team):
Admins manage the operational and strategic side of IPO management:
•	Create, update, or remove IPO listings
•	Upload PDF disclosures, company financials, and price bands
•	Monitor user activity and audit bidding patterns
•	Analyze platform usage statistics and generate reports
3. Regulators (SEBI/Compliance Auditors):
While not direct users, regulators influence the platform’s workflows. The application must:
•	Log all sensitive transactions and access events
•	Adhere to SEBI’s IPO workflow (ASBA, UPI mandates)
•	Provide secure audit trails
•	Support data exports in structured formats for scrutiny


Month 4 – Deployment, Monitoring & Final Polish
•	CI/CD Pipelines: GitHub Actions for frontend/backend auto-deploy.
•	Monitoring Tools: Sentry for error tracking, Grafana for performance metrics.
•	Export Features: CSV downloads for bids, users, IPO reports.
•	Feedback Panel: Investors can rate their experience, bugs, or suggestions.
•	Mentorship Focus: Deployment debugging, analytics, documenting real-world apps.

2.2 Functional Requirements
The IPO Web Application will implement a layered set of functionalities mapped to its primary user roles: Investors and Admins, while ensuring alignment with SEBI-compliant workflows and progressive development cycles. Each feature is planned with scalability, user experience, and maintainability in mind.

1.	User Authentication & Access Control
•	FR-1.1: The system shall allow new investors and admin users to register with unique credentials.
•	FR-1.2: It shall authenticate users via email-password or OAuth (Google sign-in optional).
•	FR-1.3: Role-based dashboards shall render based on login type (Investor/Admin).
•	FR-1.4: JWT tokens shall manage session-based authorization for API access.
•	FR-1.5: Forgot password and email verification flows shall be included for account recovery and validation.

2.	IPO Management Module (Admin)
•	FR-2.1: Admins shall be able to create, edit, publish, or delete IPO listings through a secure dashboard.
•	FR-2.2: Listings shall support metadata such as IPO name, sector, start/end date, price band, and min bid size.
•	FR-2.3: Admins shall upload IPO documents (PDF) and company logos (JPG/PNG), auto-compressed.
•	FR-2.4: Admin actions shall be recorded in a time-stamped audit log for review and compliance.
•	FR-2.5: An IPO calendar view shall provide at-a-glance status: Upcoming, Live, Ended.

3.	Bid Placement Module (Investor)
•	FR-3.1: Investors shall view all live IPOs and place bids based on predefined price bands and lot sizes.
•	FR-3.2: Each bid shall be recorded with bid amount, date-time, IPO ID, and investor ID.
•	FR-3.3: The application shall validate bid limits (e.g., up to ₹2,00,000 for retail users).
•	FR-3.4: Duplicate or conflicting bids shall be flagged and user-confirmed before override.
•	FR-3.5: The system shall support UPI integration for payment blocking (mock/sandbox mode for testing).

4.	Investor Dashboard & Analytics
•	FR-4.1: The investor dashboard shall display active bids, historical bids, and allotment results.
•	FR-4.2: Real-time analytics (e.g., IPO oversubscription ratios) shall be visualized using interactive charts.
•	FR-4.3: Investors shall receive toast/email notifications for IPO openings, bid deadlines, and result announcements.

5.	Bid Evaluation & Results Module (Admin)
•	FR-5.1: Admins shall run a simplified allotment engine that assigns shares based on bid volumes.
•	FR-5.2: The system shall auto-calculate cut-off prices and trigger result generation.
•	FR-5.3: A downloadable CSV report shall be generated for investor allotments and IPO summaries.
•	FR-5.4: Admins may manually override allotment decisions (with justification logs).

6.	Search, Filters, and Sorting
•	FR-6.1: The investor view shall include search functionality for IPOs by name, industry, and dates.
•	FR-6.2: All IPO tables shall support sorting by performance, date, or size.
•	FR-6.3: Filters shall include IPO stage (live/ended), bid status (placed/not), and min investment range.

7.	Performance and Pagination
•	FR-7.1: Lazy loading and pagination shall be used for IPO lists and bid records to improve speed.
•	FR-7.2: Bid submissions and IPO status queries shall return responses under 200ms on average.

8.	Security & Privacy
•	FR-8.1: Passwords shall be hashed using bcrypt, and sensitive data shall be stored securely.
•	FR-8.2: User data (email, PAN, UPI ID) shall never be exposed in frontend views or logs.
•	FR-8.3: Rate limiting, input sanitization, and CSRF protection shall be enforced on all sensitive routes.

9.	Notifications & Feedback
•	FR-9.1: Investors shall receive in-app and email alerts for IPO lifecycle events.
•	FR-9.2: A feedback module shall allow users to submit issues or rate their experience.
•	FR-9.3: Admins shall view feedback analytics and export data for platform improvement.

10.	Data Export & Audit Trail
•	FR-10.1: Admins shall export full IPO data, bid logs, and user reports as Excel/CSV files.
•	FR-10.2: Every IPO/bid/admin activity shall be recorded in an audit log accessible to system admins.
•	FR-10.3: Regulatory export compliance shall be ensured with structured formats (for SEBI use).

2.3 Non-Functional Requirements
The non-functional requirements (NFRs) of the IPO Web Application define critical quality attributes and operational constraints that ensure the platform’s usability, reliability, security, and maintainability. These requirements are essential to deliver a production-grade system that meets the expectations of end-users (investors), administrators, and regulatory observers.

1. Usability
•	NFR-1.1: The platform shall maintain a clean, intuitive, and responsive user interface, ensuring accessibility on all modern browsers and devices (mobile, tablet, desktop).
•	NFR-1.2: Investors and admins shall receive step-by-step prompts, tooltips, and in-app guidance to navigate bid submissions, IPO details, and dashboard metrics.
•	NFR-1.3: All critical actions shall be accompanied by feedback mechanisms such as confirmation modals, success toasts, and error messages.
•	NFR-1.4: UI/UX shall follow WCAG 2.1 guidelines to ensure accessibility for users with disabilities, including keyboard navigation and dark mode options.

2. Performance
•	NFR-2.1: All REST API calls (e.g., bid submission, IPO listing fetch) shall respond within 200 milliseconds on average.
•	NFR-2.2: The platform shall support up to 500 concurrent users under current test settings, and be scalable to support 10,000 users in future deployments.
•	NFR-2.3: Caching mechanisms (frontend and backend Redis/MemoryStore) shall be implemented to reduce load times for repeat queries like IPO lists.
•	NFR-2.4: Pagination and lazy loading shall be used for heavy datasets such as bid histories and IPO archives.

3. Security
•	NFR-3.1: Passwords shall be hashed using bcrypt; tokens or data hashes may use SHA-256 as needed.
•	NFR-3.2: The app shall implement input sanitization, CSRF protection, and rate-limiting on sensitive routes (e.g., login, bid submission).
•	NFR-3.3: All user authentication and session management shall be secured using JWTs with a refresh-token strategy to prevent session hijacking.
•	NFR-3.4: Admin and investor roles shall be strictly isolated, and unauthorized access attempts shall be logged and blocked with warnings.



4. Scalability
•	NFR-4.1: The system shall be designed using a modular, service-oriented architecture to allow horizontal scaling of APIs and background tasks.
•	NFR-4.2: The database (MongoDB/PostgreSQL) shall support sharding or replication for growth across geographical regions or IPO volume spikes.
•	NFR-4.3: New modules (e.g., payment gateway, multilingual support) shall be integrated without core system rewrites.

5. Maintainability
•	NFR-5.1: The codebase shall follow industry-standard patterns (MVC/clean architecture), be well-commented, and fully version-controlled using Git.
•	NFR-5.2: All critical logic shall include unit and integration tests with CI enforcement to prevent regression errors during feature updates.
•	NFR-5.3: A centralized logging mechanism (Winston/Morgan) shall track errors, warnings, and info logs with timestamps.
•	NFR-5.4: The platform shall provide admin-level toggle controls to turn features ON/OFF dynamically without codebase redeployment.

6. Reliability & Fault Tolerance
•	NFR-6.1: The system shall implement graceful error handling for database failures, invalid user input, and API timeouts.
•	NFR-6.2: In case of failure, a fallback UI (e.g., retry mechanism or offline notification) shall be presented to the user.
•	NFR-6.3: The application shall maintain a >99.5% uptime target (excluding planned maintenance).

7. Compliance and Auditability
•	NFR-7.1: All transactions related to bidding, IPO creation, and user data updates shall be timestamped and audit-logged.
•	NFR-7.2: Logs shall be stored for a minimum duration of 6 months and be exportable in CSV or JSON format for SEBI or institutional audit.
•	NFR-7.3: The application shall comply with Indian IT Act and SEBI IT circulars for fintech applications.

2.4 Use Case Diagrams & Scenarios
The IPO Web Application serves two primary user roles: Investor and Admin, each with distinct responsibilities and workflows. The following use case scenarios illustrate key user interactions, goals, system behaviours, and edge cases for three core operations: IPO Creation, Bid Submission, and Result Generation.

 ![image](https://github.com/user-attachments/assets/91bb8283-c505-4d43-9774-6002777cacfa)

Fig 2.1 Use Case diagram

Actors: Admin, Investor
System: IPO Management System
Use Cases: Create IPOs, Place Bids, View Results

Use Case 1: IPO Creation (Admin)
Actor: Admin
Goal: Publish a new IPO to the platform with all relevant details and documents.
Preconditions:
•	Admin is authenticated via secure login.
•	The current date is within the acceptable IPO window range.
•	The admin has valid permissions to manage IPO listings.
Main Flow:
1.	Admin navigates to the “Register IPO” section in the dashboard.
2.	Fills form fields: Company Name, Sector, Price Band (Min/Max), Lot Size, Start & End Date, Description, etc.
3.	Uploads:
o	PDF Prospectus
o	Company logo/image
4.	System validates entries (e.g., date logic, price band integrity, file formats).
5.	Admin clicks “Publish IPO.”
6.	System stores the data in the database, updates IPO status to “Upcoming,” and renders it on the investor dashboard.
Postconditions:
•	IPO is visible to all investors in the IPO Listings.
•	Admin can edit or unpublish IPOs if errors are found before the start date.
Alternate Flows:
•	If any required field is missing → Show real-time error message or leave it blank.
•	If PDF is corrupted/too large → Reject and show file validation error.

Use Case 2: Bid Submission (Investor)
Actor: Investor
Goal: Submit a bid on a live IPO using valid UPI and bid parameters.
Preconditions:
•	Investor is logged in and KYC-verified.
•	IPO status is “Live” or “Ongoing.”
•	Investor has not exceeded the ₹2,00,000 limit per IPO under the RII category.
Main Flow:
1.	Investor opens IPO details from dashboard (filtered by “Live” status).
2.	Clicks “Place Bid.”
3.	Selects:
o	Number of lots
o	Bid price (within the provided price band)
o	Cut-off price checkbox (optional)
4.	Enters UPI ID for ASBA mandate.
5.	System validates all inputs:
o	Bid value = lots × lot size × bid price
o	Price within valid range
6.	A UPI request is sent to the entered VPA (Virtual Payment Address).
7.	Upon investor’s approval of mandate:
o	Bid status is marked “Pending Allotment”
o	Amount is blocked in investor’s bank
8.	Confirmation message + email/SMS notification sent.
Postconditions:
•	Bid is stored in the database and linked to the IPO ID and user ID.
•	Admins can view bid summary analytics.
Alternate Flows:
•	Invalid UPI ID → Error shown, re-entry requested.
•	UPI timeout/failure → Bid not saved; allow retry.
•	Duplicate bid attempt → Show override confirmation prompt.

Use Case 3: Result Generation (Admin)
Actor: Admin
Goal: Generate allotment results after IPO ends based on bid records.
Preconditions:
•	IPO has ended (end date/time passed).
•	Minimum threshold of total bids has been received.
Main Flow:
1.	Admin visits “Closed IPOs” in the dashboard.
2.	Clicks “Generate Allotment” on the specific IPO.
3.	System fetches all valid bids and performs:
o	Cut-off price evaluation
o	Pro-rata allotment calculation based on lot size
o	Prioritization of bids based on timestamp (if oversubscribed)
4.	Allotments are stored in a Result table.
5.	Status of IPO changes to “Results Published.”
6.	Investor dashboards are updated with individual outcomes (Allotted / Not Allotted).
7.	Admin can export allotment data to CSV/Excel.
Postconditions:
•	Result email sent to all investors who placed bids.
•	Admin logs contain breakdown of final allotment logic.
Alternate Flows:
•	If bid count is too low → Show alert to extend IPO duration (if allowed).
•	Admin override scenario → Manually adjust allotments with audit logging enabled.

2.5 Software Requirements Specification (SRS)
The Software Requirements Specification (SRS) outlines the technical expectations and constraints related to the IPO Web Application. It encompasses user interface expectations, error/log handling mechanisms, and a compatibility matrix to ensure cross-platform accessibility and consistent user experience.

1.	UI/UX Requirements
To ensure intuitive navigation and seamless accessibility for diverse user roles (Investors and Admins), the IPO Web App must satisfy the following UI/UX design principles:
•	R1.1: The platform must be fully responsive across desktops, tablets, and mobile devices using a responsive CSS framework (e.g., Tailwind CSS or Bootstrap 5).
•	R1.2: The application should maintain role-specific dashboards: Investors see IPO listings, status, and results; Admins access listing tools and analytics.
•	R1.3: Clear call-to-actions (CTAs) must guide users through bid placement, IPO tracking, and account settings.
•	R1.4: Form validation must occur both client-side (React) and server-side (Node.js/Django) for real-time feedback and robustness.
•	R1.5: UI must follow WCAG 2.1 accessibility standards, including keyboard navigation, screen reader compatibility, and high-contrast/dark mode toggles.
•	R1.6: Investors must be presented with dynamic IPO status indicators: Upcoming, Live, Ended, Results Published.
•	R1.7: Admin UI must allow inline editing, PDF preview, date pickers, and status toggles for IPO lifecycle control.

2.	Error Handling and Logging
Robust error handling and operational observability are critical for maintaining application reliability and auditability.
•	R2.1: All form input and API responses should include clear, contextual error messages (e.g., "Invalid UPI format" or "IPO bidding closed").
•	R2.2: HTTP responses must follow standard conventions (e.g., 200 OK, 400 Bad Request, 401 Unauthorized, 500 Internal Server Error).
•	R2.3: The frontend must implement toast-style notifications for both success and failure outcomes (bid placement, login, file uploads).
•	R2.4: Server logs should capture:
o	Login attempts (success/failure)
o	Bid submissions
o	IPO creation or edits
o	Role-based access violations
•	R2.5: A centralized logger (e.g., Winston for Node.js or Python logging module) must record warnings, errors, and exceptions in structured JSON with timestamps.
•	R2.6: Critical errors should trigger admin alerts or email notifications during IPO active hours.
•	R2.7: Logs shall be stored securely in MongoDB or local encrypted file storage for at least 6 months and retrievable via the admin panel.
3.	Compatibility Matrix
To ensure that users from all environments can access the application reliably, the following compatibility standards are enforced:

Component	Supported Versions	Notes
Browsers	Chrome 95+, Firefox 90+, Edge 95+	Safari 13+ tested for mobile
Devices	Desktop, Android (8+), iOS (12+)	Responsive UI via CSS media queries
Operating Systems	Windows 10+, macOS 10.13+, Ubuntu 20.04+	Web-based interface compatible with all OS
Screen Sizes	360px – 1920px	Responsive layout tested for mobile & HD screens
Database	PostgreSQL 13+ / MongoDB 4.4+	Support for both relational and document models
Mobile View	Android Chrome, iOS Safari	Minimum screen width tested: 360px

![image](https://github.com/user-attachments/assets/ce3a1e47-a533-4389-90ce-db631f90688d)

Table 2.1 Compatibility Matrix

## Chapter 3: 
# System Design

3.1 Design Philosophy
The IPO web application is built around principles that prioritize maintainability, scalability, and a seamless user experience.
•	Model-View-Controller (MVC) Pattern:
The architecture follows the MVC pattern to organize code into distinct layers models for data, views for UI, and controllers for logic allowing cleaner separation and easier maintenance.
•	Separation of Concerns:
Each module or component handles a single responsibility. Backend logic, data management, and frontend rendering are decoupled to streamline development and debugging.
•	Mobile-Responsive Design:
The frontend UI is designed using responsive CSS frameworks and media queries, ensuring usability across devices, including smartphones and tablets.

3.2 System Architecture
The application is structured as a modern web stack using JavaScript technologies across the stack for a streamlined developer experience.
•	Frontend:
A Single Page Application (SPA) built with React. React Router handles navigation, while component-based design ensures reusability and clean separation of UI concerns.
•	Backend:
A RESTful API developed in Node.js using Express.js. The backend handles business logic, database operations, authentication, and input validation.
•	Database:
MongoDB, a NoSQL document-based database, is used for high-speed reads/writes and flexible schema management. Data is stored in collections.
•	Authentication:
JSON Web Tokens (JWT) are used for stateless session management. Tokens are signed and sent with each request to authenticate users.

3.3 Database Schema
The application uses five core collections:
•	Users: Stores user credentials, roles (e.g., admin/investor), and profile information.
•	IPOs: Contains data on each IPO offering including company details, price, open/close dates, and allocation limits.
•	Bids: Tracks user-submitted bids for IPOs, including amount, timestamp, and status.
•	Transactions: Logs successful IPO allocations, payment status, and user balances.
•	Logs: Captures audit trails for user actions, failed login attempts, and system events.

![image](https://github.com/user-attachments/assets/b4dddfe8-5a24-4091-9312-c81eee690330)
Fig 2.2 ER Diagram

(Relationships: One user can place multiple bids; one IPO can have multiple bids. Transactions link users and IPOs after allocation.)

3.4 Component Design
The React frontend is broken into modular components to promote reusability and easier updates.
•	Modular React Components:
Components like <Navbar>, <IPOCard>, <BidForm>, and <TransactionHistory> encapsulate distinct functionalities and state management.
•	API Endpoint Structure:
RESTful endpoints follow a consistent URI pattern:
POST   /api/auth/login
POST   /api/auth/register
GET    /api/ipos
POST   /api/bids
GET    /api/transactions
•	Reusable Form Handlers and Validations:
Custom hooks manage form state and validation logic (e.g., useFormValidator), enabling consistent error messaging and user feedback across forms.

3.5 Security Architecture
Security measures are implemented at both frontend and backend levels.
•	HTTPS with SSL:
All data transmission is encrypted using SSL certificates to ensure secure communication.
•	Password Hashing:
User passwords are hashed using bcrypt before being stored in the database, preventing plain-text password exposure even in case of data breaches.
•	JWT Authentication:
Every authenticated API call must include a valid JWT in the authorization header. Tokens expire after a set period and are validated server-side to prevent tampering.

Chapter 4: 
Methodology

4.1 The first two weeks were part of orientation, which had to be completed in order to qualify for team allotment. Knowledge regarding the fundamental concepts of software development were imparted along with hands-on learning. It has been summarized in the following table:

Topic	 Brief Summary 
Agile Methodology	•	Basics of Agile methodology
•	Fundamentals of the Scrum framework
•	 Purpose of Sprint and Backlogs, Roles of team members and Sprint Events such as Daily scrum meetings and stand-ups. 
•	Sprint feedback in Retrospective meeting.
•	Concepts of Kanban and Scrum boards.
Components of the Development Ecosystem	•	Benefits of using an Integrated Development Environment. 
•	Usages of Software Configuration Management System such as GitHub, which allows for versioning, sharing, branching and merging of code.
•	Continuous Integration, which mitigates risk and improves flexibility and quality of product deliverable.
•	Usages of Automation testing frameworks which provides for comprehensive testing of source code.
•	Performance Management tools
•	Technical Reviews of both types- Asynchronous and Synchronous.
•	Development and Deployment of code through trunk-based development.
•	Managing of issues and documenting changes, implemented through JIRA
•	Knowledge Systems 
Git	•	Fundamental concepts of Version Control system and how they are controlled.
•	Setting up Git and Github.
•	Important Git console commands
•	Concepts of Git clone, Git branches, Push code and Pull requests.
JIRA	•	Issue types and their usages- Epic, Story, Tasks, Spikes and Sub-tasks.
•	User Story Format- Persona, Objective and Reasoning.
•	Story Prioritization- MOSCOW Rule and how to implement.
•	Acceptance criteria, User Journey, Watcher, Story Points, Work Logs and JIRA Workflow nodes.
Unit Testing	•	Basics of unit testing, text fixtures and features.
•	Annotation usage for creating Java Unit tests, Pojo classes and Mockito framework.
•	Test-driven deployment Principles
•	Components of comprehensive unit tests
Error Handling	•	Benefits of error handling in code.
•	Error Logging and its types


4.1.1 Development Lifecycle
The project followed the Agile software development methodology, which is well-suited for dynamic web applications that require frequent iteration, collaboration, and early delivery of functional components. Agile's flexibility enabled the team to incorporate user feedback and pivot when necessary, all while maintaining continuous progress.

Agile with 2-Week Sprints
The development process was divided into sprint cycles of two weeks, with each sprint aiming to deliver a set of features or improvements. These sprints followed a repeating structure:
1.	Sprint Planning – Identifying user stories and technical tasks.
2.	Development Phase – Building assigned components and writing unit tests.
3.	Daily Standups – Short meetings to align on progress and blockers.
4.	Testing & QA – Verifying completed work against acceptance criteria.
5.	Sprint Review – Demoing the new functionality and gathering feedback.
6.	Sprint Retrospective – Evaluating the process and making improvements.
This structured yet adaptable approach ensured steady progress while allowing the flexibility to address bugs, user feedback, and priority shifts.

Task Breakdown and Role Allocation
To ensure smooth collaboration and parallel workstreams, tasks were distributed across three main functional areas:
Frontend Development
•	Designed the user interface using React.js and Tailwind CSS for clean, responsive layouts.
•	Created reusable components like navigation bars, IPO cards, bid forms, and user dashboards.
•	Implemented routing using React Router for smooth page transitions without reloads.
Backend Development
•	Developed a Node.js + Express API to handle business logic, authentication, and data processing.
•	Connected to MongoDB using Mongoose ORM for model-based access to collections.
•	Implemented RESTful API endpoints for user actions (registration, login, placing bids, fetching IPOs).
Quality Assurance (QA)
•	Wrote test cases for each module and manually verified UI behaviours and API outputs.
•	Used Postman to simulate edge cases and invalid inputs, checking for proper error handling.
•	Logged and prioritized bugs in GitHub Issues, ensuring they were addressed within the sprint.

4.2 Data Flow Diagrams (DFDs)
Data Flow Diagrams (DFDs) were created at multiple abstraction levels to visualize how data moves through the application and to clarify system interactions.
Level 0 – Context Diagram

![image](https://github.com/user-attachments/assets/e833f89b-0d7a-453f-98c6-ce654433067b)

Fig 4.1 Context Diagram L0
This diagram emphasizes the system boundaries and external interactions.

The Level 0 DFD provides a high-level overview of the entire IPO system as a single black-box process interacting with external actors.
External Entities:
•	User: Registers, logs in, browses IPOs, places bids.
•	Admin: Manages IPO listings and oversees transactions.
•	Payment Gateway (Future Scope): Optional integration to handle real-time fund transfers.
Process:
•	Central IPO System receives and returns data to each external entity.

Level 1 – Functional Breakdown

 ![image](https://github.com/user-attachments/assets/da864eca-45a9-40e2-a2d0-970e344e237c)

Fig 4.2 Functional Breakdown L1
The Level 1 DFD breaks the central system into key functional modules, detailing how data flows between them.

Core Processes:
1.	User Management – Handles registration, login, and profile updates.
2.	IPO Management – Lists current IPOs, their timelines, and allocation rules.
3.	Bidding Engine – Accepts and records bids, enforces constraints (e.g., bid limits).
4.	Transaction Logger – Generates transactions post-IPO based on bid outcomes.
5.	Admin Controls – Allows IPO creation, status updates, and audit logs.
Data stores at this level include:
•	Users DB
•	IPOs DB
•	Bids DB
•	Transactions DB
•	Logs DB

Level 2 – Detailed Flow for Bidding Module

 ![image](https://github.com/user-attachments/assets/2cc9ca7d-21f9-4de4-8773-c6d91e0ad78e)

Fig 4.3 Detailed flow L2

The Level 2 diagram focuses on the Bidding module, detailing internal validation steps:
1.	User submits bid.
2.	System checks IPO status (open/closed).
3.	Bid amount validated against limits.
4.	Bid saved to the database.
5.	Confirmation sent back to the user.
This level helps developers and testers understand potential failure points (e.g., closed IPO, over-bidding) and how the system responds.

4.3 Tools & Environment
Successful development required a robust toolchain for coding, testing, collaboration, and deployment. The selected tools improved productivity, reduced friction, and streamlined deployment.

Development Tools
•	Visual Studio Code (VS Code):
Used as the primary Integrated Development Environment (IDE). Its extension ecosystem, such as Prettier for formatting and ESLint for linting, helped enforce code quality and consistency.
•	Postman:
Vital for backend development and QA. It enabled quick testing of API endpoints, automated test scripts, and provided visibility into request/response flows.
•	MongoDB Compass:
A GUI tool for exploring and debugging MongoDB data. Allowed visualization of collections, query performance monitoring, and schema insights.
Version Control
•	Git + GitHub:
Git managed the local version history, while GitHub hosted the central repository. Features like pull requests, code reviews, and branch protection ensured clean merges and collaboration between team members.
Branching Strategy:
o	main: Stable production-ready code.
o	dev: Ongoing development features.
o	feature/*: Isolated feature branches merged into dev.

Deployment Environment
•	Render / Heroku:
Chosen for their simplicity and integration capabilities. They allowed quick deployment of both frontend and backend apps with automatic GitHub integration.
o	Frontend (React SPA): Hosted as a static site with environment variable support.
o	Backend (Node.js API): Deployed with environment-specific settings for dev and production environments.
Both services supported autoscaling, logs monitoring, and rollback features in case of deployment issues.

By following Agile practices, designing thorough data models, and using the right tools, the development of the IPO web application remained organized, on schedule, and aligned with real-world deployment practices. These methodologies laid a solid foundation for maintainability, user experience, and future enhancements.


Chapter 6:
Testing & Validation

6.1 Testing Strategies
The project employed a multi-layered testing approach to detect defects early and validate application behaviour under realistic conditions.

Unit Testing (Jest)
Jest, a JavaScript testing framework, was used to test individual functions, especially those in the backend. Unit tests were written for utility methods, model validators, and business logic.

Integration Testing (Supertest)
Supertest was used to simulate API requests and validate full backend flows (e.g., registration, login, bid placement). These tests checked how different components interact under normal and edge-case scenarios.

Manual UI Testing
Manual testing was conducted to verify the React frontend on various screen sizes and browsers. UI behaviour under different roles (investor, admin) was checked, ensuring consistent UX.
Checklist:
•	Form validation (blank fields, incorrect inputs)
•	Navigation flow
•	Responsive layout on mobile/tablet/desktop
•	Bid status updates
•	Notification popups and alerts

6.2 Test Case Documentation
Each major feature was supported by a test case table detailing the scenario, input, expected output, and actual result. Example:
![image](https://github.com/user-attachments/assets/f64ee350-2025-4f8a-9bf6-df0c76b5cb74)

Table 6.2.1

6.3 Bug Reports and Fix Log
All bugs were logged and categorized by severity: Critical, Major, or Minor. Fixes were prioritized based on impact and sprint deadlines.
Bug Classification Example:

![image](https://github.com/user-attachments/assets/6c665d8e-9d39-4d32-9732-7d94842a5f13)
![image](https://github.com/user-attachments/assets/755503ed-0a37-48f8-a63a-b758c914f193)

Table 6.3.1
All critical bugs were resolved before the production build. Minor UI polish was handled post-sprint.

6.4 Performance Testing
Performance testing was conducted to analyze how the backend handles concurrent requests and to identify bottlenecks.
Load Testing with Postman
Using Postman's Collection Runner, concurrent requests (up to 100 simulated users) were sent to:
•	/api/auth/login
•	/api/ipos
•	/api/bids
Response times were measured and compared across different scenarios.

JMeter Simulation
Apache JMeter was used for larger-scale simulations, focusing on:
•	Login Spike Test – Burst of logins (500 users) in under 10 seconds
•	IPO Listing Load – 1000 requests for IPO data
•	Bid Flooding Test – Simulated 200 users placing bids within 60 seconds
•	
Results Summary:
![image](https://github.com/user-attachments/assets/c50c90ab-483f-4d00-aac7-aadbdfb951ec)

Table 6.4.1
Graphs and charts were generated using JMeter plugins and imported into Google Sheets for visualization.

Performance Observations
•	The backend remained stable up to 500 concurrent users.
•	MongoDB handled read-heavy requests efficiently.
•	Slight latency observed in bid submission under extreme load due to DB write operations.


Chapter 7: 
Results

•	User Login Page 
                  ![image](https://github.com/user-attachments/assets/d0475731-f146-45db-adbf-9b224079644c)
                  ![image](https://github.com/user-attachments/assets/d5a366d4-bcfe-4ebb-8991-5834d1a82032)
                  ![image](https://github.com/user-attachments/assets/3ba589ce-56a2-48e2-bee9-cd49f5dab349)


                      
Fig 7.1 User Login/Signup/Forgot Password

•	Admin Login Page 
![image](https://github.com/user-attachments/assets/1f136cff-41d8-4aaa-ac8d-64b323057703)

  
Fig 7.2 Admin Login Page
![image](https://github.com/user-attachments/assets/be38fe78-b07d-4e0d-97b5-86010b9e4992)

•	IPO Listing Table - Admin
 ![image](https://github.com/user-attachments/assets/ed38073e-26e5-48c9-9946-6e374cd515ad)

Fig 7.3 IPO Admin Dashboard

•	IPO Listing Table – User
 ![image](https://github.com/user-attachments/assets/f6c146a6-c76b-430e-92cb-3af6067ff504)

Fig 7.4 IPO User Dashboard

•	New IPO Registration
  ![image](https://github.com/user-attachments/assets/cfce924a-cfe5-41b0-a7aa-f95d2f6c6de4)
![image](https://github.com/user-attachments/assets/f52aa11b-2195-4100-a6a1-b9405c9242f9)

Fig 7.5 New IPO registration page

•	Admin Dashboard
 ![image](https://github.com/user-attachments/assets/8ac4117c-bf6b-4012-95ec-d860e425eb07)

Fig 7.6 Admin Analytics Dashboard

•	IPO Details Page
 ![image](https://github.com/user-attachments/assets/682b447f-b9d3-4d5e-95bf-eea769640b93)

Fig 7.7 IPO details page 

•	Bid Submission Form
 ![image](https://github.com/user-attachments/assets/00978c73-fe2c-4208-950a-47e2188bb285)

Fig 7.8 Bid Submission Form

•	MongoDB IPO Database
 ![image](https://github.com/user-attachments/assets/d12e4303-762a-4a27-95aa-0cdbcc52a9ad)

Fig 7.8 IPO Data
•	Dark Mode Versions 
        ![image](https://github.com/user-attachments/assets/f281bc35-c981-4561-a9e9-f274bd7f0448)  ![image](https://github.com/user-attachments/assets/bf01bf30-a84d-4505-aeb6-0e5cb92b86c2)


Fig 7.9 Dark Mode Version examples

•	Response time charts and error rate visualizations

Chapter 8:
 Conclusion and Future Scope

8.1 Conclusion
The IPO Web Application project set out to create a secure, responsive, and feature-rich platform for simulating the bidding process in initial public offerings. The system successfully provides core functionality such as:
•	User registration and authentication using secure JWT tokens.
•	Admin-driven IPO creation with real-time validations.
•	Dynamic bid submission with live IPO data.
•	Role-based dashboards and notification systems.
•	Error handling, audit logging, and performance resilience.
By following an Agile methodology, leveraging modern technologies like React, Node.js, and MongoDB, and integrating proper testing strategies, the development team was able to meet the primary objectives of the project. The system proved effective during simulated testing, demonstrating stability, responsiveness, and usability across different user roles and scenarios.
The platform also serves as a valuable learning tool, mimicking the core mechanics of an IPO bidding ecosystem and exposing users to how real-time systems handle financial processes in a simplified environment.

8.2 Limitations
While the platform meets its design and functional goals, it currently operates within a simulation environment and lacks certain real-world integrations. Key limitations include:
•	No Live NSE/BSE Integration:
The system does not fetch or synchronize data with real stock exchanges such as NSE (National Stock Exchange) or BSE (Bombay Stock Exchange). IPO listings are manually created by administrators for demonstration purposes.
•	Simulation-Level Functionality:
IPO results, allocations, and payment verifications are handled within the platform without any actual financial transactions or real-time regulatory data feeds. This restricts the system to educational and demonstration use cases.
•	No Payment System:
There is no mechanism to process actual payments or block funds through UPI, net banking, or cards, which limits realism and functionality in real financial contexts.
•	Web-Only Access:
The application is built as a web SPA (Single Page Application) and does not currently support mobile apps or offline access.

8.3 Future Enhancements
To evolve the platform from a functional prototype into a production-grade tool or educational simulator, several improvements can be considered:
1. Live IPO Integration via APIs
Connecting the system to real-time exchange APIs (such as NSE/BSE APIs or SEBI’s market data feeds) would allow for:
•	Live IPO listing and schedule updates
•	Real-time pricing and demand tracking
•	Data validation from exchange-approved sources
This would move the system closer to real-world financial applications and offer practical investment simulations.
2. Payment Gateway Integration
Integrating a secure payment gateway (e.g., Razorpay, Paytm, Stripe, or UPI services) would:
•	Allow users to block funds or simulate payments
•	Enable full lifecycle simulation from bid to allocation to settlement
•	Provide insights into financial flows and banking API workflows
3. Mobile App Version
Developing a mobile app version (using React Native or Flutter) would extend the system's reach and usability, especially for student demos, investment awareness sessions, or fintech hackathons. Push notifications, biometric login, and offline sync could also be explored.
4. AI-Based IPO Recommendation Engine
Using historical data, user behavior, and financial indicators, an AI module could be introduced to:
•	Suggest IPOs based on user interest, risk appetite, or investment history
•	Highlight potentially oversubscribed or undervalued IPOs
•	Deliver personalized insights through a recommender system
This would make the platform smarter and more user-centric, aligning with trends in fintech applications.

In summary, the IPO web application stands as a robust, extensible base for learning and simulation in capital markets. With enhancements in real-time integration, payments, mobile support, and AI, it holds the potential to grow into a next-generation financial education or pre-market bidding tool.

REFERENCES
•	React Documentation. (n.d.). React – A JavaScript library for building user interfaces. Retrieved from https://reactjs.org/docs
•	Securities and Exchange Board of India (SEBI). (n.d.). IPO Guidelines and Regulatory Framework. Retrieved from https://www.sebi.gov.in
•	MongoDB Documentation. (n.d.). MongoDB Manual. Retrieved from https://www.mongodb.com/docs
•	Open Web Application Security Project (OWASP). (n.d.). OWASP Top Ten Security Risks. Retrieved from https://owasp.org
•	JWT.io. (n.d.). JSON Web Tokens – Introduction and Documentation. Retrieved from https://jwt.io/introduction

