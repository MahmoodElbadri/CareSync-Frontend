export interface PatientCreateDto {
    fullName: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    bloodGroup: string;
}

/*
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string BloodGroup { get; set; } 
    */