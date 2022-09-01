--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comment; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.comment (
    id bigint NOT NULL,
    message character varying(255),
    time_stamp date,
    user_name character varying(255),
    plant_id bigint
);


ALTER TABLE public.comment OWNER TO diana;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: diana
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO diana;

--
-- Name: plant; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.plant (
    id bigint NOT NULL,
    available boolean NOT NULL,
    contact character varying(255),
    description character varying(255),
    location character varying(255),
    photo character varying(255),
    plant_name character varying(255),
    user_name character varying(255)
);


ALTER TABLE public.plant OWNER TO diana;

--
-- Name: user_authorities; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.user_authorities (
    user_id bigint NOT NULL,
    authorities bytea
);


ALTER TABLE public.user_authorities OWNER TO diana;

--
-- Name: users; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(255),
    enabled boolean NOT NULL,
    introduction character varying(255),
    name character varying(255),
    password character varying(255),
    role character varying(255)
);


ALTER TABLE public.users OWNER TO diana;

--
-- Name: users_comments; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.users_comments (
    user_id bigint NOT NULL,
    comments_id bigint NOT NULL
);


ALTER TABLE public.users_comments OWNER TO diana;

--
-- Name: users_plants; Type: TABLE; Schema: public; Owner: diana
--

CREATE TABLE public.users_plants (
    user_id bigint NOT NULL,
    plants_id bigint NOT NULL
);


ALTER TABLE public.users_plants OWNER TO diana;

--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.comment (id, message, time_stamp, user_name, plant_id) FROM stdin;
7	How beautiful! 	2022-08-19	Daisy	6
\.


--
-- Data for Name: plant; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.plant (id, available, contact, description, location, photo, plant_name, user_name) FROM stdin;
6	t	in comment	white and small	here	daisy.jpg	Daisy	Daisy
9	t	tset	test	tes	rose.jpg	test	Test
\.


--
-- Data for Name: user_authorities; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.user_authorities (user_id, authorities) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.users (id, email, enabled, introduction, name, password, role) FROM stdin;
1	test@email.com	t	I like plants.	Dia	$2a$10$X4WsUCF94xIIPhhrz3Hz4eUai0GF/1knfx1nGwcja8WbMW.sV/t/i	USER
2	daisy@daisy.com	t	I like daisies.	Daisy	$2a$10$CdsZv.kAx0rN4Kb4ZU0U1eww/H7yUOCQedBkQ5nS2ON8RaEwRa74q	USER
4	dobsinszki.diana@gmail.com	t	én	Enikő	$2a$10$xhkGK2wqce/oyp7UMXAQPulPduXIRccETxuXtCqiulcDSkLC2yXsm	USER
8	test@email.com	t	hi	Test	$2a$10$SyH2mnvi98IfF2PzxIofzefR3mhfri9Rqnl.JH1tRUaKs/Hage7tm	USER
\.


--
-- Data for Name: users_comments; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.users_comments (user_id, comments_id) FROM stdin;
\.


--
-- Data for Name: users_plants; Type: TABLE DATA; Schema: public; Owner: diana
--

COPY public.users_plants (user_id, plants_id) FROM stdin;
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: diana
--

SELECT pg_catalog.setval('public.hibernate_sequence', 9, true);


--
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);


--
-- Name: plant plant_pkey; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.plant
    ADD CONSTRAINT plant_pkey PRIMARY KEY (id);


--
-- Name: users_comments uk_8a9ff54pt2w205r0hlcbe8mm6; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_comments
    ADD CONSTRAINT uk_8a9ff54pt2w205r0hlcbe8mm6 UNIQUE (comments_id);


--
-- Name: users_plants uk_f4ts79e860xms5emg7tq8eir; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_plants
    ADD CONSTRAINT uk_f4ts79e860xms5emg7tq8eir UNIQUE (plants_id);


--
-- Name: users_comments users_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_comments
    ADD CONSTRAINT users_comments_pkey PRIMARY KEY (user_id, comments_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_plants users_plants_pkey; Type: CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_plants
    ADD CONSTRAINT users_plants_pkey PRIMARY KEY (user_id, plants_id);


--
-- Name: users_plants fkb9rvjsllow9vll84j8is01vxe; Type: FK CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_plants
    ADD CONSTRAINT fkb9rvjsllow9vll84j8is01vxe FOREIGN KEY (plants_id) REFERENCES public.plant(id);


--
-- Name: users_plants fkdwipchrj3cjas09lg2e8cb88h; Type: FK CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_plants
    ADD CONSTRAINT fkdwipchrj3cjas09lg2e8cb88h FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: comment fkf1m5ypf6babiqbvd679v7oy2c; Type: FK CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT fkf1m5ypf6babiqbvd679v7oy2c FOREIGN KEY (plant_id) REFERENCES public.plant(id);


--
-- Name: users_comments fklpp3854cd31i91y1pc26727p6; Type: FK CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_comments
    ADD CONSTRAINT fklpp3854cd31i91y1pc26727p6 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users_comments fktiy0vd4wmghpt42hcjr5708sv; Type: FK CONSTRAINT; Schema: public; Owner: diana
--

ALTER TABLE ONLY public.users_comments
    ADD CONSTRAINT fktiy0vd4wmghpt42hcjr5708sv FOREIGN KEY (comments_id) REFERENCES public.comment(id);


--
-- PostgreSQL database dump complete
--

