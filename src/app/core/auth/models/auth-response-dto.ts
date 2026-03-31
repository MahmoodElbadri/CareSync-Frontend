export interface AuthResponseDto {
    email: string;
    token: string;
    fullName: string;
    role: string[];
}
/*
{
    Email = user.Email,
    Token = await _tokenService.CreateToken(user),
    FullName = user.FullName,
    Role = roles
};*/