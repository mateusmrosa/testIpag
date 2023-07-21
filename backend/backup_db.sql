-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.34 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela db_test_ipag.failed_jobs: ~0 rows (aproximadamente)

-- Copiando dados para a tabela db_test_ipag.migrations: ~4 rows (aproximadamente)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(5, '2014_10_12_000000_create_users_table', 2),
	(6, '2019_12_14_000001_create_personal_access_tokens_table', 2);

-- Copiando dados para a tabela db_test_ipag.password_resets: ~0 rows (aproximadamente)

-- Copiando dados para a tabela db_test_ipag.personal_access_tokens: ~0 rows (aproximadamente)

-- Copiando dados para a tabela db_test_ipag.users: ~5 rows (aproximadamente)
INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
	(12, 'mateus@gmail.com', '$2y$10$IsMXKXBNRu3PP0Cg7ykl1eEN5h8lZ2nMr74bt3VzcyUhdLMXtumA.', '2023-07-19 15:50:56', '2023-07-19 15:50:56'),
	(29, 'joice@gmail.com', '$2y$10$PfIP1967yWlWSXkQ6OsD1OFil7mWZZb0l.oX6skD4Qrx/ShPGxZfG', '2023-07-21 15:57:31', '2023-07-21 15:57:31'),
	(31, 'miguel@gmail.com', '$2y$10$n4zWLEUK7MRrihnNQ5kXCuSBNZxeeJgo3vniVilwxbru5Ta4MdeOC', '2023-07-21 16:09:54', '2023-07-21 16:09:54'),
	(32, 'adriana@gmail.com', '$2y$10$RPcweh2pOflhVXxSM6YpAeQarSFpuq9tmaT3aZbp3s0.7rsvB9YuW', '2023-07-21 18:05:34', '2023-07-21 18:05:34'),
	(33, 'pedro@gmail.com', '$2y$10$yGgPvCVDP8caCQM43RhWKeBUSCrpU3rPftyWCgdjDzqPkuRzps1tm', '2023-07-21 18:06:20', '2023-07-21 18:06:20');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
