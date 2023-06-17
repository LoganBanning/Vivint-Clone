INSERT INTO LeadInfo
(fullName, email, phoneNumber)
VALUES
($1, $2, $3)
returning *;