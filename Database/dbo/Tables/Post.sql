CREATE TABLE [dbo].[Post] (
    [Id]             INT             IDENTITY (1, 1) NOT NULL,
    [Title]			 NVARCHAR (100)  NOT NULL,
	[Content]		 NVARCHAR (MAX)  NOT NULL,
	[ContentPreview] NVARCHAR (2000) NOT NULL,
    [CreatedOn]		 DATETIME        DEFAULT GETUTCDATE() NOT NULL,
	[IsDeleted]		 BIT             DEFAULT 0 NOT NULL,
    CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED ([Id] ASC)
);

