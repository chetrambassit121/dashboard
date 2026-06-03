import { Box, Typography, Paper } from '@mui/material';

export default function Dashboard2() {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        borderRadius: 3,
        color: 'white',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          lineHeight: 1.8,
          fontSize: '1.05rem',
        }}
      >
        This interactive sales analytics dashboard provides insights into
        supermarket transactions across multiple countries, branches, customer
        demographics, payment methods, and product categories. Built with
        Django, Django REST Framework, React, and MUI X Charts, the application
        transforms raw sales data into meaningful visualizations that help
        identify trends, customer behavior, and business performance metrics.<br /><br /><br />
        🌍 Countries (Netherlands, France, Germany)<br />
        🏬 Branches (A, B, C)<br />
        👥 Customer Types (Member, Normal)<br />
        🚹🚺 Gender<br />
        💳 Payment Methods (Cash, Credit Card, Ewallet)<br />
        📦 Product Lines<br />
        📅 Sales Dates<br />
        🔢 Quantities and Unit Prices
      </Typography>
    </Paper>
  );
}





//
// dashboard analyzes supermarket sales across:

// 🌍 Countries (Netherlands, France, Germany)
// 🏬 Branches (A, B, C)
// 👥 Customer Types (Member, Normal)
// 🚹🚺 Gender
// 💳 Payment Methods (Cash, Credit Card, Ewallet)
// 📦 Product Lines
// 📅 Sales Dates
// 🔢 Quantities and Unit Prices

//