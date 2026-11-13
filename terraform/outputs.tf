output "instance_id" {
  description = "ID створеного EC2 інстанса"
  value       = aws_instance.my_server.id
}

output "instance_public_ip" {
  description = "Публічна IP-адреса сервера"
  value       = aws_instance.my_server.public_ip
}