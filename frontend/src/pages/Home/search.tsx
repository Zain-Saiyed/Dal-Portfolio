import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

    

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filters, setFilters] = useState({
    department: '',
    experience: '',
    academicLevel: '',
  });

  const handleCollaborateClick = (result: string) => {
    console.log(`Collaboration request sent for result: ${result}`);
  };
  
  const handleSearchClick = () => {
    setSearchPerformed(true);
    console.log('Search button clicked with query:', searchQuery);
  };

  const handleResetClick = () => {
    setSearchQuery('');
    setFilters({
      department: '',
      experience: '',
      academicLevel: '',
    });
    setFilteredResults([]);
    setSearchPerformed(false);
  };

  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ padding: '20px', margin: '20px 0', textAlign: 'center' }}>
          
          <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
              Search
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleResetClick}>
              Reset
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            
            <FormControl variant="outlined" sx={{ minWidth: 130 }}>
              <InputLabel>Department</InputLabel>
              <Select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                label="Department"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="computerScience">Computer Science</MenuItem>
                <MenuItem value="healthSciences">Health Sciences</MenuItem>
                <MenuItem value="law">Law</MenuItem>
                <MenuItem value="business&economics">Business & Economics</MenuItem>
                <MenuItem value="naturalScience">Natural Sciences</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 180 }}>
              <InputLabel>Experience</InputLabel>
              <Select
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                label="Experience"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="lessThanSixMonths">Less than 6 months</MenuItem>
                <MenuItem value="lessThanOneYear">Less than 1 year</MenuItem>
                <MenuItem value="lessThanTwoYears">Less than 2 years</MenuItem>
                <MenuItem value="twoToFiveYears">2 to 5 years</MenuItem>
                <MenuItem value="moreThanFiveYears">More than 5 years</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 160 }}>
              <InputLabel>Academic Level</InputLabel>
              <Select
                value={filters.academicLevel}
                onChange={(e) => setFilters({ ...filters, academicLevel: e.target.value })}
                label="Academic Level"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                <MenuItem value="graduate">Graduate</MenuItem>
                
              </Select>
            </FormControl>
          </Box>

          {searchPerformed && (filteredResults.length > 0 ? (
            <Box>
              <Typography variant="h6" gutterBottom>Search Results</Typography>
              {filteredResults.map((result, index) => (
                <Paper key={index} elevation={2} sx={{ padding: '10px', margin: '10px 0' }}>
                  <Typography>{result}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => handleCollaborateClick(result)}>
                    Collaborate
                  </Button>
                </Paper>
              ))}
            </Box>
          ) : (
            searchPerformed && <Typography>No results found.</Typography>
          ))}
        </Paper>
        <Button variant="contained" color="secondary" onClick={handleBackToHomeClick}>
          Back to Home Page
        </Button>
      </Container>
    </Box>
  );
};

export default SearchPage;
