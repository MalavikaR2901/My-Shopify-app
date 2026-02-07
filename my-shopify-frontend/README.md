INVENTORY CO. - A Smart Inventory Platform for Shopify app (Landing Page)

Inventory Co. is a full stack Inventory Management platform designed for modern Shopify-style stores.


It helps Business : 
* Track products in real time
* Manage orders efficiently
* Receive low-stock alerts
* Reduce manual work and errors
* Manage landing page content dynamically


Key Features

* Smart Landing Page
- Video background
- Dynamic content from DB
- Modern responsive design

* Role-Based Auth
- Admin
- Supplier
- User

* Pricing Plans
- Free / Pro
- Stored dynamically in DB

For this page, I use :

* Next js : Frontend
* Java Springboot : Backend
* MongoDB Atlas : Database (Also use mongo db extension of VS Code)



Demo (Testing):
Frontend :
 http://localhost:3000 

Backend API : 
* Features : http://localhost:8080/api/features
* Landing Content : http://localhost:8080/api/landing_content
* User registration : http://localhost:8080/api/auth/register
* Pricing plan : http://localhost:8080/api/pricing_plans

I used POSTMAN for testing


How to run :

* Backend :
cd inventory
.\mvnw.cmd spring-boot:run

* Frontend:
cd my-shopify-frontend
npm install
npm run dev

 My Approach (Short Explanation)

### Step 1 — Planning
- Designed a modern landing page layout
- Identified required modules (features, pricing, testimonials, auth)
- Chose MERN-like architecture but with Spring Boot for backend

### Step 2 — Backend First
- Created MongoDB collections
- Built REST APIs
- Structured models + repositories + controllers

### Step 3 — Frontend
- Built responsive UI using Next.js + Tailwind
- Connected APIs dynamically
- Added animations and UX improvements

### Step 4 — Integration
- Connected landing page to backend content
- Implemented role-based authentication
- Added real-time data fetching

---

# 🚀 Improvements (If given more time)

If I had more time, I would:

🔹 Functional Improvements
- JWT authentication
- Password hashing (bcrypt)
- Admin dashboard for content management
- Real-time notifications
- Export reports (CSV/PDF)
- Stripe payment integration
- Role-based route protection

 🔹 Technical Improvements
- Unit tests (JUnit + Jest)
- Docker deployment
- CI/CD pipeline
- Caching
- API documentation (Swagger)

 🔹 UX Improvements
- Dark mode
- Charts (Recharts)
- Better onboarding
- Mobile-first optimization

---

# 📌 Future Scope

- Multi-store support
- AI demand prediction
- Barcode scanner integration
- Supplier management
- Purchase order automation

---

# 👩‍💻 Author

Malavika  
MCA (AI & ML)  
  

---

# 📄 License
Educational / Academic Project










