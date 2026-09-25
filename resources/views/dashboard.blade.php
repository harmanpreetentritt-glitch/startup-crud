<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dashboard</title>

    <!-- Font Awesome -->
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    @vite(['resources/css/dashboard.css','resources/js/dashboard.js'])

</head>

<body>

    <!-- ================= HEADER ================= -->

    <header class="top-bar">

        <div class="logo">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Student Management System</span>
        </div>

        <a href="{{ url('/logout') }}" class="logout-btn">
            <i class="fa-solid fa-right-from-bracket"></i>
            Logout
        </a>

    </header>


    <!-- ================= MAIN ================= -->

    <main class="dashboard-container">


        <!-- Welcome Section -->

        <section class="welcome-section">

            <div>
                <p class="small-title">OVERVIEW</p>

                <h1>Dashboard</h1>

                <p class="welcome-text">
                    Welcome back! Manage your students and courses from here.
                </p>
            </div>

        </section>


        <!-- ================= CARDS ================= -->

        <section class="dashboard-cards">


            <!-- Students Card -->

            <div class="dashboard-card">

                <div class="card-icon">
                    <i class="fa-solid fa-user-graduate"></i>
                </div>

                <div class="card-content">

                    <h2>Students</h2>

                    <p>
                        Manage student records, view student information
                        and update existing records.
                    </p>

                    <a href="{{ url('/students') }}" class="card-btn">
                        View Students
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>


            <!-- Courses Card -->

            <div class="dashboard-card">

                <div class="card-icon">
                    <i class="fa-solid fa-book-open"></i>
                </div>

                <div class="card-content">

                    <h2>Courses</h2>

                    <p>
                        View available courses and manage course
                        information from one place.
                    </p>

                    <a href="{{ url('/courses') }}" class="card-btn">
                        View Courses
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>


        </section>


    </main>

</body>

</html>