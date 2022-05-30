import React, { useRef, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm } from "@inertiajs/inertia-react";
import EmptyLayout from "../../Layout/EmptyLayout";
import axios from "axios";

const theme = createTheme();

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

const Login = () => {
    const submitBtn = useRef<HTMLButtonElement>(null);

    const { data, setData, post, processing, errors } = useForm<LoginForm>({
        email: "",
        password: "",
        remember: false,
    });

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        console.log(process.env.MIX_UNSPLASH_API_KEY);
        axios.get(
            `https://api.unsplash.com/photos/tE6th1h6Bfk?client_id=${process.env.MIX_UNSPLASH_API_KEY}`
        );
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(https://api.unsplash.com/photos/tE6th1h6Bfk?client_id=${process.env.UNSPLASH_API_KEY}&query=nature)`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                onKeyUp={(e) => {
                                    if (e.key === "Enter") {
                                        post("/login");
                                    }
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => post("/login")}
                                disabled={processing}
                                ref={submitBtn}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

Login.layout = (page: any) => <EmptyLayout children={page} title="Welcome" />;

export default Login;
